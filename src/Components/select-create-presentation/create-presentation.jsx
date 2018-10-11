import React, { Component } from 'react';
import './create-presentation.css';
import PresentationCard from '../presentation-card/presentation-card';
import NewPPTCard from '../new-ppt-card/new-ppt-card';

class CreatePresentation extends Component {
  render() {
    return (
      <div className="presentation-page">
        <NewPPTCard />
        <PresentationCard />
        <PresentationCard />
        <PresentationCard />
        <PresentationCard />
        <PresentationCard />
        <PresentationCard />
        <PresentationCard />
        <PresentationCard />
        <PresentationCard />
      </div>
    );
  }
}

export default CreatePresentation;
