import React from 'react';
import './EditOptions.css';
import { PropTypes } from 'prop-types';

class EditOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { changeFontSize } = this.props;
    return (
      <div className="EditOptions">
        Font Size:
        <select onChange={event => changeFontSize(event.target.value)}>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="24">24</option>
        </select>
        Font Family:
        <input type="text" />
      </div>
    );
  }
}

EditOptions.propTypes = {
  changeFontSize: PropTypes.func.isRequired,
};

export default EditOptions;
