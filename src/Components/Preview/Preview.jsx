import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';

import templateList from '../Templates/templateList';
import { addPage } from '../../redux/Actions';

import './Preview.css';

const RenderTemplateList = ({ list, addPage }) => {
  const renderList = list.map((item) => {
    const { thumbnail } = item;
    return (
      <div className="tile" onClick={() => { addPage(item); }}>
        <img src={thumbnail} width="100%" height="100%" />
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
    const { pageName } = this.state;
    pageDetails.pageName = pageName;
    return this.props.addPage(pageDetails);
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <div onClick={this.onOpenModal} className="new-template-button" >
          <center><p>Click me!</p></center>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="template-heading">
            <center><h2>TEMPLATES</h2></center>
          </div>
          <div className="modal-size">
            <RenderTemplateList list={templateList} addPage={this.addPage} />
          </div>

        </Modal>
      </div>
    )
  }
}

{/* <div className="tile-container">
  
  <div className="tile-disabled">
    AVAILABLE ON SPONSORSHIP
            </div>
</div>
  <div className="tile-container">
    <div className="tile-disabled">
      AVAILABLE ON SPONSORSHIP
            </div>
    <div className="tile-disabled">
      AVAILABLE ON SPONSORSHIP
            </div>
  </div> */}

Preview.propTypes = {
};

const mapStateToProps = (state) => ({
  pages: state.templatesReducer.pages
});

const mapDispatcherToProps = (dispatch) => ({
  addPage: (pageDetails) => dispatch(addPage(pageDetails)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Preview);
