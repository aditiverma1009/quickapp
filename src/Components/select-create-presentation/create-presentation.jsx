import React, { Component } from 'react';
import { connect } from 'react-redux';

import './create-presentation.css';
import axios from 'axios';
import PresentationCard from '../presentation-card/presentation-card';
import NewPPTCard from '../new-ppt-card/new-ppt-card';

class CreatePresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presentations: []
    };
  }

  componentWillMount() {
    axios.get(`https://1euk0sb2a2.execute-api.ap-south-1.amazonaws.com/hackathon-demo/quickapp?userId=test1`).then((response) => {
      this.setState({
        presentations: response.data.body,
      });
    });
  }

  renderPresentations = () => {
    const {presentations} = this.state;
    return presentations.map((presentation) => {
      return <PresentationCard userId={presentation.userId} key={presentation.projectId} projectId={presentation.projectId} pages={presentation.pages} name={presentation.projectId} />
    })
  }

  render() {
    this.renderPresentations()
    return (
      <div className="presentation-page">
        <NewPPTCard />
        {this.renderPresentations()}
      </div>
    );
  }
}

const mapStateToProps = () => ({
  
});

const mapDispatcherToProps = () => ({

});

export default connect(mapStateToProps, mapDispatcherToProps)(CreatePresentation);
