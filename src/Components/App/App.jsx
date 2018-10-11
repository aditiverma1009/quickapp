import React from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import {onClickEditReducer} from '../../redux/Actions/index';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    

        
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List yaynpm</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    } 
  }


const mapStateToProps = state => ({

  });
  
  const mapDispatcherToProps = dispatch => ({
   
  });
  export default withRouter(connect(mapStateToProps, mapDispatcherToProps)(App));
  
  
  

