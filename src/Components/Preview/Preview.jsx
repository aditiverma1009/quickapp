import React from 'react';
import './Preview.css';
import template from '../../download.jpeg';
import Modal from 'react-responsive-modal';

class Preview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
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
      <div className="Preview">

        <div className="new-template-button">
          <button onClick={this.onOpenModal} >
            Click me!
             </button>

        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="template-heading">
            <center><h2>Templates</h2></center>
          </div>
          <label >Name</label>
          <input type="text" width="100px" className="name-input" />
          <div className="tile-container">
            <div className="tile" onClick={() => alert("you have chose template 1")}>
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
          </div>
          <center><button className="choose-template-button">Submit</button></center>
        </Modal>
      </div>
    )
  }
}

Preview.propTypes = {
};

export default Preview;
