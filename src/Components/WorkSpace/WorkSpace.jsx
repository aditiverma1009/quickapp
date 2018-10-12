import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import {} from '../../redux/Actions/index';
import Body from '../Body/Body';
import Projects from '../Projects/Projects';
import Login from '../Login';
import './WorkSpace.css';

class WorkSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderingPage = () => {
    // window.localStorage.login = false;
    if (window.localStorage.login === "true") {
      return (
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route exact path="/dashboard" component={Body} />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route path="/" component={Login}/> 
        </Switch>
        
      );
    }
  }

  render() {
    return (this.renderingPage());
  }
}

const mapStateToProps = () => ({

});

const mapDispatcherToProps = () => ({

});

export default withRouter(connect(mapStateToProps, mapDispatcherToProps)(WorkSpace));
