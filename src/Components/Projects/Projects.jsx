import React from 'react';
import './Projects.css';
import CreatePresentation from '../select-create-presentation/create-presentation';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Projects">
        <CreatePresentation />
      </div>
    );
  }
}
