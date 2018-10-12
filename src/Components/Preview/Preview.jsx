import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import New from './newTemplate.png';

import templateList from '../Templates/templateList';
import { addPage } from '../../redux/Actions';
import thumbnail from '../Templates/assets/Template1.jpeg';
import './Preview.css';

const RenderTemplateList = ({ list, addPage }) => {
  const renderList = list.map((item) => {
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
    const newPageData = {
      head: {
        content: 'some content',
        fontSize: 14,
        fontFamily: 'Arial'
      },
      listItems: [
        {
          content: 'this',
          fontSize: 14,
          fontFamily: 'Arial'
        },
        {
          content: 'is',
          fontSize: 14,
          fontFamily: 'Arial'
        },
        {
          content: 'a',
          fontSize: 14,
          fontFamily: 'Arial'
        },
        {
          content: 'listItem',
          fontSize: 14,
          fontFamily: 'Arial'
        }
      ]
    }
    this.props.addPage(newPageData);
  }

  render() {
    const { open } = this.state;
    const {pages} = this.props
    const allPages = pages.map((step, index) => (
      <div className="displayPage" onClick={() => this.props.selectedPage(index)}>
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
            <RenderTemplateList list={this.props.pages} addPage={this.addPage} />
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
});

const mapDispatcherToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatcherToProps)(Preview);
