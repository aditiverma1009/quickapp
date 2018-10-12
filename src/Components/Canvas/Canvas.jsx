import React from 'react';
import {PropTypes} from 'prop-types';
import './Canvas.css';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: {
        content: 'some content',
        fontSize: 14,
        fontFamily: 'Arial'
      },
      editMode: false,
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
    };
  }

  componentWillMount () {
    const {selectedPageIndex} = this.props;
    if(this.props.pages.length==0){
      return;
    }
    const {head, listItems} = this.props.pages[selectedPageIndex]
    this.setState({
      ...this.state,
      head,
      listItems
    })
  }

  componentWillReceiveProps(nextProps) {
    const {selectedPageIndex} = nextProps
    if(this.props.pages.length==0){
      return;
    }
    const {head, listItems} = this.props.pages[selectedPageIndex]
    this.setState({
      ...this.state,
      head,
      listItems
    })
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
        head: {
          ...this.state.head,
          content: newContent
        },
        headContent: newContent
      })
    } else {
      const newListItems = this.state.listItems;
      newListItems[tag].content = newContent;
      this.setState({
        ...this.state,
        listItems: newListItems
      })
    }
  }

  changeFontSize = (fontSize, tag) => {
    if(tag === 'h1') {
      this.setState({
        fontSizeHead: fontSize,
        head: {
          ...this.state.head,
          fontSize
        }
      })
    } else {
      const newListItems = this.state.listItems;
      newListItems[tag].fontSize = fontSize;
      this.setState({
        listItems: newListItems
      })
    }
  }

  changeFontFamily = (fontFamily, tag) => {
    if(tag === 'h1') {
      this.setState({
        fontFamilyHead: fontFamily
      })
    }  else {
      const newListItems = this.state.listItems;
      newListItems[tag].fontFamily = fontFamily;
      this.setState({
        listItems: newListItems
      })
    }
  }

  syncWithDB = () => {
    const {pages, selectedPageIndex} = this.props;
    const tempArr = pages;
    if(pages.length==0){
      return;
    }
    tempArr[selectedPageIndex].head = this.state.head
    tempArr[selectedPageIndex].listItems = this.state.listItems
    this.props.syncWithDB(tempArr)
  }

  render() {
    const {editMode, head, listItems, tagID} = this.state;
    return (
      <div className="Canvas">
        <div className="Canvasframe">
          {!editMode ? 
          <h1 style={{fontSize:Number(head.fontSize),fontFamily:head.fontFamily}} onClick={() => this.editContentTrue('h1')}>{head.content}</h1> :
          (tagID === 'h1' ? <div className="EditModeInputFrame">
            <input style={{fontSize:Number(head.fontSize),outline:'none',border:0,fontWeight:"bold",fontFamily:head.fontFamily}} 
              type="text"
              value={head.content}
              onChange={(event) => this.changeContent(event.target.value, 'h1')} />
            <span onClick={this.editContentFalse}>done</span>
            <span>
                Font Size:
                <select value={head.fontSize} onChange={event => this.changeFontSize(event.target.value, 'h1')}>
                  <option value="14">14</option>
                  <option value="16">16</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                  <option value="22">22</option>
                  <option value="24">24</option>
                </select>
                Font Family:
                <select value={head.fontFamily} onChange={event => this.changeFontFamily(event.target.value, 'h1')}>
                  <option value="Arial">Arial</option>
                  <option value="Courier">Courier</option>
                  <option value="Georgia">Georgia</option>
                  <option value="sans">sans</option>
                  <option value="sans-serif">sans-serif</option>
                </select>
          </span>
          </div> : 
          <h1 style={{fontSize:Number(head.fontSize),fontFamily:head.fontFamily}} onClick={() => this.editContentTrue('h1')}>{head.content}</h1>)
          }
          <ul>
            {!editMode ?
              <li style={{fontSize:Number(listItems[0].fontSize),fontFamily:listItems[0].fontFamily}} onClick={() => this.editContentTrue('list0')}>{listItems[0].content}</li> :
              (
                tagID === 'list0' ? 
                <div className="EditModeInputFrame">
                  <input style={{fontSize:Number(listItems[0].fontSize),outline:'none',border:0,fontFamily:listItems[0].fontFamily}} 
                    type="text"
                    value={listItems[0].content}
                    onChange={(event) => this.changeContent(event.target.value, 0)} />
                  <span onClick={this.editContentFalse}>done</span>
                  <span>
                        Font Size:
                        <select value={listItems[0].fontSize} onChange={event => this.changeFontSize(event.target.value, 0)}>
                          <option value="14">14</option>
                          <option value="16">16</option>
                          <option value="18">18</option>
                          <option value="20">20</option>
                          <option value="22">22</option>
                          <option value="24">24</option>
                        </select>
                        Font Family:
                        <select value={listItems[0].fontFamily} onChange={event => this.changeFontFamily(event.target.value, 0)}>
                          <option value="Arial">Arial</option>
                          <option value="Courier">Courier</option>
                          <option value="Georgia">Georgia</option>
                          <option value="sans">sans</option>
                          <option value="sans-serif">sans-serif</option>
                        </select>
                  </span>
                </div> :
                <li style={{fontSize:Number(listItems[0].fontSize),fontFamily:listItems[0].fontFamily}} onClick={() => this.editContentTrue('list0')}>{listItems[0].content}</li>
              )
            }
            {!editMode ?
              <li style={{fontSize:Number(listItems[1].fontSize),fontFamily:listItems[1].fontFamily}} onClick={() => this.editContentTrue('list1')}>{listItems[1].content}</li> :
              (
                tagID === 'list1' ? 
                <div className="EditModeInputFrame">
                  <input style={{fontSize:Number(listItems[1].fontSize),outline:'none',border:0,fontFamily:listItems[1].fontFamily}} 
                    type="text"
                    value={listItems[1].content}
                    onChange={(event) => this.changeContent(event.target.value, 1)} />
                  <span onClick={this.editContentFalse}>done</span>
                  <span>
                        Font Size:
                        <select value={listItems[1].fontSize} onChange={event => this.changeFontSize(event.target.value, 1)}>
                          <option value="14">14</option>
                          <option value="16">16</option>
                          <option value="18">18</option>
                          <option value="20">20</option>
                          <option value="22">22</option>
                          <option value="24">24</option>
                        </select>
                        Font Family:
                        <select value={listItems[1].fontFamily} onChange={event => this.changeFontFamily(event.target.value, 1)}>
                          <option value="Arial">Arial</option>
                          <option value="Courier">Courier</option>
                          <option value="Georgia">Georgia</option>
                          <option value="sans">sans</option>
                          <option value="sans-serif">sans-serif</option>
                        </select>
                  </span>
                </div> :
                <li style={{fontSize:Number(listItems[1].fontSize),fontFamily:listItems[1].fontFamily}} onClick={() => this.editContentTrue('list1')}>{listItems[1].content}</li>
              )
            }
            {!editMode ?
              <li style={{fontSize:Number(listItems[2].fontSize),fontFamily:listItems[2].fontFamily}} onClick={() => this.editContentTrue('list2')}>{listItems[2].content}</li> :
              (
                tagID === 'list2' ? 
                <div className="EditModeInputFrame">
                  <input style={{fontSize:Number(listItems[2].fontSize),outline:'none',border:0,fontFamily:listItems[2].fontFamily}} 
                    type="text"
                    value={listItems[2].content}
                    onChange={(event) => this.changeContent(event.target.value, 2)} />
                  <span onClick={this.editContentFalse}>done</span>
                  <span>
                        Font Size:
                        <select value={listItems[2].fontSize} onChange={event => this.changeFontSize(event.target.value, 2)}>
                          <option value="14">14</option>
                          <option value="16">16</option>
                          <option value="18">18</option>
                          <option value="20">20</option>
                          <option value="22">22</option>
                          <option value="24">24</option>
                        </select>
                        Font Family:
                        <select value={listItems[2].fontFamily} onChange={event => this.changeFontFamily(event.target.value, 2)}>
                          <option value="Arial">Arial</option>
                          <option value="Courier">Courier</option>
                          <option value="Georgia">Georgia</option>
                          <option value="sans">sans</option>
                          <option value="sans-serif">sans-serif</option>
                        </select>
                  </span>
                </div> :
                <li style={{fontSize:Number(listItems[2].fontSize),fontFamily:listItems[1].fontFamily}} onClick={() => this.editContentTrue('list2')}>{listItems[2].content}</li>
              )
            }
            {!editMode ?
              <li style={{fontSize:Number(listItems[3].fontSize),fontFamily:listItems[3].fontFamily}} onClick={() => this.editContentTrue('list3')}>{listItems[3].content}</li> :
              (
                tagID === 'list3' ? 
                <div className="EditModeInputFrame">
                  <input style={{fontSize:Number(listItems[3].fontSize),outline:'none',border:0,fontFamily:listItems[3].fontFamily}} 
                    type="text"
                    value={listItems[3].content}
                    onChange={(event) => this.changeContent(event.target.value, 3)} />
                  <span onClick={this.editContentFalse}>done</span>
                  <span>
                        Font Size:
                        <select value={listItems[3].fontSize} onChange={event => this.changeFontSize(event.target.value, 3)}>
                          <option value="14">14</option>
                          <option value="16">16</option>
                          <option value="18">18</option>
                          <option value="20">20</option>
                          <option value="22">22</option>
                          <option value="24">24</option>
                        </select>
                        Font Family:
                        <select value={listItems[3].fontFamily} onChange={event => this.changeFontFamily(event.target.value, 3)}>
                          <option value="Arial">Arial</option>
                          <option value="Courier">Courier</option>
                          <option value="Georgia">Georgia</option>
                          <option value="sans">sans</option>
                          <option value="sans-serif">sans-serif</option>
                        </select>
                  </span>
                </div> :
                <li style={{fontSize:Number(listItems[3].fontSize),fontFamily:listItems[3].fontFamily}} onClick={() => this.editContentTrue('list3')}>{listItems[3].content}</li>
              )
            }
          </ul>
        </div>
        <div>
          <button onClick={this.syncWithDB}>Save</button>
        </div>
      </div>
    );
  }
}


Canvas.propTypes = {
};

export default Canvas
