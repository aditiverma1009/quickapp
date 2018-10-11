import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import {} from '../../redux/Actions/index';
import Body from '../Body/Body';
import Projects from '../Projects/Projects';
import './WorkSpace.css';

class WorkSpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderingPage = () => (
    <Switch>
      <Route exact path="/" component={Projects} />
      <Route exact path="/dashboard" component={Body} />
    </Switch>
  )

  render() {
    return (this.renderingPage());
  }
}

const mapStateToProps = () => ({

});

const mapDispatcherToProps = () => ({

});

export default withRouter(connect(mapStateToProps, mapDispatcherToProps)(WorkSpace));
