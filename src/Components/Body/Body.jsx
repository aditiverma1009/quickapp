import React from 'react';
import Canvas from '../Canvas/Canvas';
import EditOptions from '../EditOptions/EditOptions';
import './Body.css';

const Body = () => (
  <div className="BodyArea">
    <Canvas />
    <EditOptions />
  </div>
);

Body.propTypes = {
};

export default Body;
