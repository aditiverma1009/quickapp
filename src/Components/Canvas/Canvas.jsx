import React from 'react';
import { connect } from 'react-redux';
import { addPage } from '../../redux/Actions';
import {PropTypes} from 'prop-types';

import './Canvas.css';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headContent: 'some shitty content',
      editMode: false,
      listItems: ['this', 'is', 'list of', 'list items'],
      fontSizeHead: 14,
      fontSizeList0: 14,
      fontSizeList1: 14,
      fontSizeList2: 14,
      fontSizeList3: 14,
      fontFamilyHead: 14,
      fontFamilyList0: 14,
      fontFamilyList1: 14,
      fontFamilyList2: 14,
      fontFamilyList3: 14,
    };
  }

  editContentTrue = (tagID) => {
    this.setState({
      ...this.state,
      editMode: true,
      tagID
    })
  }

  editContentFalse = () => {
    this.setState({
      ...this.state,
      editMode: false,
      tagID: ''
    })
  }

  changeContent = (newContent, tag) => {
    if(tag === 'h1') {
      this.setState({
        ...this.state,
        headContent: newContent
      })
    } else {
      const newListItems = this.state.listItems;
      newListItems[tag] = newContent;
      console.log('newListItems', newListItems)
      this.setState({
        ...this.state,
        listItems: newListItems
      })
    }
  }

  changeFontSize = (fontSize, tag) => {
    if(tag === 'h1') {
      this.setState({
        fontSizeHead: fontSize
      })
    } else if(tag === 'list0') {
      this.setState({
        fontSizeList0: fontSize
      })
    } else if(tag === 'list1') {
      this.setState({
        fontSizeList1: fontSize
      })
    } else if(tag === 'list2') {
      this.setState({
        fontSizeList2: fontSize
      })
    } else if(tag === 'list3') {
      this.setState({
        fontSizeList3: fontSize
      })
    }
  }

  changeFontFamily = (fontFamily, tag) => {
    if(tag === 'h1') {
      this.setState({
        fontFamilyHead: fontFamily
      })
    } else if(tag === 'list0') {
      this.setState({
        fontFamilyList0: fontFamily
      })
    } else if(tag === 'list1') {
      this.setState({
        fontFamilyList1: fontFamily
      })
    } else if(tag === 'list2') {
      this.setState({
        fontFamilyList2: fontFamily
      })
    } else if(tag === 'list3') {
      this.setState({
        fontFamilyList3: fontFamily
      })
    }
  }

  render() {
    const {editMode, headContent, tagID, listItems, fontSizeHead, 
      fontFamilyHead, fontFamilyList0, fontFamilyList1, fontFamilyList2, fontFamilyList3,
      fontSizeList0, fontSizeList1, fontSizeList2, fontSizeList3} = this.state;
    const {fontSize} = this.props;
    return (
      <div className="Canvas">
        <div className="Canvasframe">
          {!editMode ? 
          <h1 style={{fontSize:Number(fontSizeHead),fontFamily:fontFamilyHead}} onClick={() => this.editContentTrue('h1')}>{headContent}</h1> :
          (tagID === 'h1' ? <div className="EditModeInputFrame">
            <input style={{fontSize:Number(fontSizeHead) - 3,outline:'none',border:0,fontWeight:"bold",fontFamily:fontFamilyHead}} 
              type="text"
              value={headContent}
              onChange={(event) => this.changeContent(event.target.value, 'h1')} />
            <span onClick={this.editContentFalse}>done</span>
            <span>
                Font Size:
                <select onChange={event => this.changeFontSize(event.target.value, 'h1')}>
                  <option value="14">14</option>
                  <option value="16">16</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                  <option value="22">22</option>
                  <option value="24">24</option>
                </select>
                Font Family:
                <select onChange={event => this.changeFontFamily(event.target.value, 'h1')}>
                  <option value="Arial">Arial</option>
                  <option value="Courier">Courier</option>
                  <option value="Georgia">Georgia</option>
                  <option value="sans">sans</option>
                  <option value="sans-serif">sans-serif</option>
                </select>
          </span>
          </div> : 
          <h1 style={{fontSize:Number(fontSizeHead),fontFamily:fontFamilyHead}} onClick={() => this.editContentTrue('h1')}>{headContent}</h1>)
          }
          <ul>
            {!editMode ?
              <li style={{fontSize:Number(fontSizeList0),fontFamily:fontFamilyList0}} onClick={() => this.editContentTrue('list0')}>{listItems[0]}</li> :
              (
                tagID === 'list0' ? 
                <div className="EditModeInputFrame">
                  <input style={{fontSize:Number(fontSizeList0) - 3,outline:'none',border:0,fontFamily:fontFamilyList0}} 
                    type="text"
                    value={listItems[0]}
                    onChange={(event) => this.changeContent(event.target.value, 0)} />
                  <span onClick={this.editContentFalse}>done</span>
                  <span>
                        Font Size:
                        <select onChange={event => this.changeFontSize(event.target.value, 'list0')}>
                          <option value="14">14</option>
                          <option value="16">16</option>
                          <option value="18">18</option>
                          <option value="20">20</option>
                          <option value="22">22</option>
                          <option value="24">24</option>
                        </select>
                        Font Family:
                        <select onChange={event => this.changeFontFamily(event.target.value, 'list0')}>
                          <option value="Arial">Arial</option>
                          <option value="Courier">Courier</option>
                          <option value="Georgia">Georgia</option>
                          <option value="sans">sans</option>
                          <option value="sans-serif">sans-serif</option>
                        </select>
                  </span>
                </div> :
                <li style={{fontSize:Number(fontSizeList0),fontFamily:fontFamilyList0}} onClick={() => this.editContentTrue('list0')}>{listItems[0]}</li>
              )
            }
            {!editMode ?
              <li style={{fontSize:Number(fontSizeList1),fontFamily:fontFamilyList1}} onClick={() => this.editContentTrue('list1')}>{listItems[1]}</li> :
              (
                tagID === 'list1' ? 
                <div className="EditModeInputFrame">
                  <input style={{fontSize:Number(fontSizeList1) - 3,outline:'none',border:0,fontFamily:fontFamilyList1}} 
                    type="text"
                    value={listItems[1]}
                    onChange={(event) => this.changeContent(event.target.value, 1)} />
                  <span onClick={this.editContentFalse}>done</span>
                  <span>
                        Font Size:
                        <select onChange={event => this.changeFontSize(event.target.value, 'list1')}>
                          <option value="14">14</option>
                          <option value="16">16</option>
                          <option value="18">18</option>
                          <option value="20">20</option>
                          <option value="22">22</option>
                          <option value="24">24</option>
                        </select>
                        Font Family:
                        <select onChange={event => this.changeFontFamily(event.target.value, 'list1')}>
                          <option value="Arial">Arial</option>
                          <option value="Courier">Courier</option>
                          <option value="Georgia">Georgia</option>
                          <option value="sans">sans</option>
                          <option value="sans-serif">sans-serif</option>
                        </select>
                  </span>
                </div> :
                <li style={{fontSize:Number(fontSizeList1),fontFamily:fontFamilyList1}} onClick={() => this.editContentTrue('list1')}>{listItems[1]}</li>
              )
            }
            {!editMode ?
              <li style={{fontSize:Number(fontSizeList2),fontFamily:fontFamilyList2}} onClick={() => this.editContentTrue('list2')}>{listItems[2]}</li> :
              (
                tagID === 'list2' ? 
                <div className="EditModeInputFrame">
                  <input style={{fontSize:Number(fontSizeList2) - 3,outline:'none',border:0,fontFamily:fontFamilyList2}} 
                    type="text"
                    value={listItems[2]}
                    onChange={(event) => this.changeContent(event.target.value, 2)} />
                  <span onClick={this.editContentFalse}>done</span>
                  <span>
                        Font Size:
                        <select onChange={event => this.changeFontSize(event.target.value, 'list2')}>
                          <option value="14">14</option>
                          <option value="16">16</option>
                          <option value="18">18</option>
                          <option value="20">20</option>
                          <option value="22">22</option>
                          <option value="24">24</option>
                        </select>
                        Font Family:
                        <select onChange={event => this.changeFontFamily(event.target.value, 'list2')}>
                          <option value="Arial">Arial</option>
                          <option value="Courier">Courier</option>
                          <option value="Georgia">Georgia</option>
                          <option value="sans">sans</option>
                          <option value="sans-serif">sans-serif</option>
                        </select>
                  </span>
                </div> :
                <li style={{fontSize:Number(fontSizeList2),fontFamily:fontFamilyList2}} onClick={() => this.editContentTrue('list2')}>{listItems[2]}</li>
              )
            }
            {!editMode ?
              <li style={{fontSize:Number(fontSizeList3),fontFamily:fontFamilyList3}} onClick={() => this.editContentTrue('list3')}>{listItems[3]}</li> :
              (
                tagID === 'list3' ? 
                <div className="EditModeInputFrame">
                  <input style={{fontSize:Number(fontSizeList3) - 3,outline:'none',border:0,fontFamily:fontFamilyList3}} 
                    type="text"
                    value={listItems[3]}
                    onChange={(event) => this.changeContent(event.target.value, 3)} />
                  <span onClick={this.editContentFalse}>done</span>
                  <span>
                        Font Size:
                        <select onChange={event => this.changeFontSize(event.target.value, 'list3')}>
                          <option value="14">14</option>
                          <option value="16">16</option>
                          <option value="18">18</option>
                          <option value="20">20</option>
                          <option value="22">22</option>
                          <option value="24">24</option>
                        </select>
                        Font Family:
                        <select onChange={event => this.changeFontFamily(event.target.value, 'list3')}>
                          <option value="Arial">Arial</option>
                          <option value="Courier">Courier</option>
                          <option value="Georgia">Georgia</option>
                          <option value="sans">sans</option>
                          <option value="sans-serif">sans-serif</option>
                        </select>
                  </span>
                </div> :
                <li style={{fontSize:Number(fontSizeList3),fontFamily:fontFamilyList3}} onClick={() => this.editContentTrue('list3')}>{listItems[3]}</li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}


Canvas.propTypes = {
  fontSize: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  pages: state.templatesReducer.pages,
});

const mapDispatcherToProps = dispatch => ({
  alterPage: pageDetails => dispatch(addPage(pageDetails)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Canvas);
