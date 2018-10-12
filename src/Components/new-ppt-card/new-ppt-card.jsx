import React, { Component } from 'react';
import './new-ppt-card.css';
import Modal from 'react-responsive-modal';
import logo from './logo.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { addProject } from '../../redux/Actions';

class NewPPTCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      acceptedPassword: true,
      projectID: '',
    };
  };

  syncProjectsIntoDB = (newProject) => {
    const {userName} = this.props;
    const options = {
      url: 'https://1euk0sb2a2.execute-api.ap-south-1.amazonaws.com/hackathon-demo/quickapp',
      method: 'put',
      data: {
        userId:userName,
        projectId: newProject,
        pages: [],
        }
    }
    return axios(options).then((result) => {
      this.props.history.push('/');
    }).then(()=>{
      window.location.reload();
    })
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  onProjectNameChange=(event)=>{
    let ProjectNameValue = event.target.value;
    let {projectList}= this.props;
    if(projectList.length!=0){
      let found = projectList.find((element)=>element.projectID === ProjectNameValue); 
      if(found){
        this.setState({
          acceptedPassword:false,
          projectID:ProjectNameValue,
        })
      }
      else{
        this.setState({
          acceptedPassword:true,
          projectID:ProjectNameValue,
        })
      }
    }
  }
  render() {

    const { open } = this.state;
    const { projectID } = this.state;
    const { acceptedPassword } = this.state;
    return (
      <div className="presentation-card">
        <img className="new-ppt-card-icon" src={logo} alt="logo" onClick={this.onOpenModal} />
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="template-heading">
            <h2>Create Project</h2>
            <label>Project Name:</label>
            <input type="text" name="project-name" onChange={(event)=>this.onProjectNameChange(event)} /> 
            <div className={this.state.projectID.length!=0?'VisibleStatus':'InvisibleStatus'}>{this.state.acceptedPassword  ? '' : 'This Project Name is taken'}</div>
            <br/>
            <button type="submit" disabled={!this.state.acceptedPassword || this.state.projectID.length==0} onClick={()=>{ this.props.addProject(projectID); this.syncProjectsIntoDB(projectID)}}>Submit</button>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userName:state.loginReducer.userName,
  projectList: state.templatesReducer.allProjects,
});

const mapDispatcherToProps = (dispatch) => ({
  addProject: newProject => dispatch(addProject(newProject)),
});
export default withRouter(connect(mapStateToProps, mapDispatcherToProps)(NewPPTCard));
