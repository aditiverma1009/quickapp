import React, { Component } from 'react';
import './presentation-card.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

class PresentationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      pages, userId, projectId,
    } = this.props;
    return (
      <div className="presentation-card">
        <Link
          to={{
            pathname: '/dashboard',
            state: {
              pages, userId, projectId,
            },
          }}
          style={{ textDecoration: 'none' }}
        >
          <div>
            <img className="ppt-card-icon" src={logo} alt="logo" />
            <div className="ppt-card-name">{this.props.name}</div>
          </div>
        </Link>
      </div>
    );
  }
}

PresentationCard.propTypes = {
};

export default PresentationCard;
