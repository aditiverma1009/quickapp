import React, { Component } from 'react';
import './new-ppt-card.css';
import logo from './logo.png';

class NewPPTCard extends Component {
  render() {
    return (
      <div className="presentation-card">
      <img className="new-ppt-card-icon" src={logo} alt="logo"/>
      </div>
    );
  }
}

export default NewPPTCard;
