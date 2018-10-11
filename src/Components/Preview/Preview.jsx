import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';

import templateList from '../Templates/templateList';
import { addPage } from '../../redux/Actions';

import './Preview.css';

const RenderTemplateList = ({ list, addPage }) => {
  const renderList = list.map((item) => {
    console.log("item", item);
    const { thumbnail } = item;
    return (
      <div className="tile" key={item.templateName}>
        <img src={thumbnail} onClick={() => { addPage(item); }} width="100%" height="100%" />
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
        <div onClick={this.onOpenModal} className="new-template-button" >
          <center><br></br><br></br>
            <p>+</p></center>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="template-heading">
            <h2>Templates</h2>
          </div>
          <div className="modal-size">
            <RenderTemplateList list={templateList} addPage={this.addPage} />
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
