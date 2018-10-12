import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-main">
        <Link to="/" style={{ textDecoration: 'none' }}><div className="back-button">&lt;</div></Link>
        <div className="logo-position">
          <div>QUICK</div>
          <div>
            {' '}
            <img className="app-icon" src={logo} />
          </div>
          <div>APP</div>
        </div>
        <div className="signout">Sign Out</div>
      </div>
    );
  }
}

export default Header;
