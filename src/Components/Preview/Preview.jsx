import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import New from './newTemplate.png';

import templateList from '../Templates/templateList';
import { addPage } from '../../redux/Actions';

import './Preview.css';

const RenderTemplateList = ({ list, addPage }) => {
  const renderList = list.map((item) => {
    const { thumbnail } = item;
    return (
      <div className="presentation-card" onClick={() => { addPage(item); }} key={item.templateName}>
        <div>
          <center> <img className="ppt-card-icon" src={thumbnail} alt="logo" /></center>
          <div className="ppt-card-name"> {item.templateName}</div>
        </div>
      </div>
    );
  });
  return renderList;
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      pageName: '',
    };
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };

  addPage = (pageDetails) => {
    this.setState({ open: false });
    return this.props.addPage(pageDetails);
  }

  render() {

    const { open } = this.state;
    const pages = this.props.pages.slice();
    const allPages = pages.map((step, index) => (
      <div className="displayPage">
        <center><p>Page {index + 1} <br /> {step.template} </p></center>
      </div>
    ));

    return (
      <div className="Preview">
        <div onClick={this.onOpenModal} className="new-template-button" ><br></br><br></br>
          <center><img src={New} alt="+" height="50px"
            min-width="50px" />
          </center>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="template-heading">
            <h2>Templates</h2>
          </div>
          <div className="modal-size">
            <RenderTemplateList list={templateList} addPage={this.addPage} />
            <div className="presentation-card" >
              <div>
                <center> <img className="ppt-card-icon" src={New} alt="logo" /></center>
                <div className="ppt-card-name"> Add new template</div>
              </div>
            </div>
          </div>
        </Modal>
        <div className="allPages">
          {allPages}
        </div>
      </div>
    )
  }
}

Preview.propTypes = {
};

const mapStateToProps = (state) => ({
  pages: state.templatesReducer.pages
});

const mapDispatcherToProps = (dispatch) => ({
  addPage: (pageDetails) => dispatch(addPage(pageDetails)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Preview);
