import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';

import templateList from '../Templates/templateList';
import './Preview.css';

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

  render() {
    const { open } = this.state;
    return (
      <div>
        <div onClick={this.onOpenModal} className="new-template-button" >
          <center><p>Click me!</p></center>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="template-heading">
            <center><h2>Templates</h2></center>
          </div>
          <label>Name</label>
          <input type="text" width="100px" className="name-input" />
          {/* <RenderTemplateList list={templateList} /> */}
          <center><button className="choose-template-button">Submit</button></center>
        </Modal>
      </div>
    )
  }
}

{/* <div className="tile-container">
  <div className="tile" onClick={() => }>
    <img src={template} width="100%" height="100%" />
  </div>
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
  addPage: () => dispatch(addPage()), // templateName, pageName, data
});

export default connect(mapStateToProps, mapDispatcherToProps)(Preview);
