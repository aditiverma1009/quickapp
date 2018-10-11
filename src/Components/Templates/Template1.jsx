import React from 'react';
import './Template1.css';

const Template1 = ({ data }) => {
  const {
    h1Text, h1Style, liText, liStyle, globalStyle,
  } = data;
  return (
    <div className="template1" style={globalStyle}>
      <h1 style={h1Style}>{h1Text}</h1>
      <ul>
        {liText.map(item => <li style={liStyle} key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default Template1;
