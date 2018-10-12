import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import WorkSpace from '../WorkSpace/WorkSpace';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div className="application">
        <Header />
        <WorkSpace />
      </div>
    );
  }
}


const mapStateToProps = () => ({
});

const mapDispatcherToProps = () => ({

});
export default withRouter(connect(mapStateToProps, mapDispatcherToProps)(App));
