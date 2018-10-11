import React, { Component } from 'react';
import './presentation-card.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

class PresentationCard extends Component {
  render() {
    return (
      <div className="presentation-card">
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <div>
            <img className="ppt-card-icon" src={logo} alt="logo" />
            <div className="ppt-card-name"> PPt Name</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default PresentationCard;
