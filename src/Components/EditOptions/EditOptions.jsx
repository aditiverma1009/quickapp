import React from 'react';

import Button from '../Button/Button';
import './EditOptions.css';

class EditOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  // onClickToggle = () => {
  //     console.log('hiiii')
  //     const {visible} = this.state;
  //     this.setState({
  //         visible: !visible,
  //     });
  //   };

  render() {
    // const { visible } = this.state;
    return (
      <div className="EditOptions">
        Font Size:
        <input className="FontSize Option" type="text" />
        Font Family:
        <input className="FontFamily Option" type="text" />
      </div>
    );
  }
}

EditOptions.propTypes = {
};

export default EditOptions;
