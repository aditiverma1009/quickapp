import React, { Component } from 'react';
import { connect } from 'react-redux';

import './create-presentation.css';
import axios from 'axios';
import { connect } from 'react-redux';
import PresentationCard from '../presentation-card/presentation-card';
import { Switch, Route, withRouter } from 'react-router-dom';
import NewPPTCard from '../new-ppt-card/new-ppt-card';

class CreatePresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presentations: []
    };
  }

  componentWillMount() {
    axios.get(`https://1euk0sb2a2.execute-api.ap-south-1.amazonaws.com/hackathon-demo/quickapp?userId=${userName}`).then((response) => {
      this.setState({
        presentations: response.data.body,
      });
    });
  }

  renderPresentations = () => {
    const {presentations} = this.state;
    return presentations.map((presentation) => {
      return <PresentationCard userId={presentation.userId} key={presentation.projectId} projectId={presentation.projectId} pages={presentation.pages} name={presentation.projectId} />
    })
  }

  render() {
    this.renderPresentations()
    return (
      <div className="presentation-page">
        <NewPPTCard />
        {this.renderPresentations()}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  userName:state.loginReducer.userName,
});

const mapDispatcherToProps = (dispatch) => ({

});
export default withRouter(connect(mapStateToProps, mapDispatcherToProps)(CreatePresentation));
