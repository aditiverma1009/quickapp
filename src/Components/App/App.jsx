import React from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
// import { onClickEditReducer } from '../../redux/Actions/index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="app" />
    );
  }
}


const mapStateToProps = () => ({

});

const mapDispatcherToProps = () => ({

});
export default withRouter(connect(mapStateToProps, mapDispatcherToProps)(App));
