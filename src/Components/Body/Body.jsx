import React from 'react';
import Preview from '../Preview/Preview';
import Canvas from '../Canvas/Canvas';
import './Body.css';
import axios from 'axios';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPageIndex: 0,
      pages: []
    };
  }

  selectedPage = (selectedPageIndex, template) => {
    this.setState({
      ...this.state,
      selectedPageIndex,
      template
    })
  }

  componentWillMount() {
 
    let { pages } = this.props.location.state;
    if (pages.length===0) {
      return;
    }
    let {selectedPageIndex} = this.state;
    this.setState({
      ...this.state,
      pages,
      template: pages[selectedPageIndex].template
    })
  }

  addPage = (newPageData, template) => {
    const tempArr = this.state.pages;
    tempArr.push(newPageData)
    this.setState({
      ...this.state,
      pages: tempArr,
      template
    })
  }

  syncWithDB = (newPages) => {
    const { userId, projectId } = this.props.location.state;
    const options = {
      url: 'https://1euk0sb2a2.execute-api.ap-south-1.amazonaws.com/hackathon-demo/quickapp',
      method: 'put',
      data: {
        userId: userId,
        projectId: projectId,
        pages: newPages
        }
    }
    return axios(options).then((result) => {
      this.setState({
        ...this.state,
        pages: newPages
      })
      this.props.history.push('/');
    })
  }

  render() {
    const { userId, projectId } = this.props.location.state;
    const {selectedPageIndex, pages, template} = this.state;
    return (
      <div className="BodyArea">
        <Canvas
          pages={pages}
          userId={userId}
          projectId={projectId}
          selectedPageIndex={selectedPageIndex}
          syncWithDB={(newPages) => this.syncWithDB(newPages)}
          template={template}
        />
        <Preview
          pages={pages}
          userId={userId}
          projectId={projectId}
          selectedPage={(selectedPageIndex, template) => this.selectedPage(selectedPageIndex, template)}
          addPage={(newPageData, template) => this.addPage(newPageData, template)}
        />
      </div>
    );
  }
}
