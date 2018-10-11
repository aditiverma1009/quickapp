import React from 'react';
import { connect } from 'react-redux';
import { addPage } from '../../redux/Actions';

import './Canvas.css';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <div className="Canvas">

        <div className="Canvasframe" />

      </div>

    // <div>
    //   <div onClick={this.onOpenModal} className="new-template-button" >
    //     <center><p>Click me!</p></center>
    //   </div>
    //   <Modal open={open} onClose={this.onCloseModal} center>
    //     <div className="template-heading">
    //       <center><h2>Templates</h2></center>
    //     </div>
    //     <label>Name</label>
    //     <input type="text" width="100px" className="name-input" />
    //     <RenderTemplateList list={templateList} addPage={this.addPage}/>
    //     <center><button className="choose-template-button">Submit</button></center>
    //   </Modal>
    // </div>
    );
  }
}


Canvas.propTypes = {
};

const mapStateToProps = state => ({
  pages: state.templatesReducer.pages,
});

const mapDispatcherToProps = dispatch => ({
  alterPage: pageDetails => dispatch(addPage(pageDetails)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Canvas);
