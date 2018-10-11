// import PropTypes from 'prop-types';
import React from 'react';
// import BodyHeader from '../BodyHeader/BodyHeader';
import './Header.css';

const Header = () => (
  <div className="Header">
    {/* <BodyHeader
      textNoteTitleHeading={props.textNoteTitleHeading}
      textButtonEn={props.textButtonEn}
    /> */}
    <div className="Logo">QuickApp</div>
    <div className="ProjectName">Project Name for tablet</div>
  </div>
);

Header.propTypes = {
//   onSaveEvent: PropTypes.func.isRequired,
};

export default Header;
