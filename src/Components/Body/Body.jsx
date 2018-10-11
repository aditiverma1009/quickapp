import React from 'react';
import Preview from '../Preview/Preview';
import Canvas from '../Canvas/Canvas';
import './Body.css';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      fontSizeHead, fontSizeList0, fontSizeList1, fontSizeList2, fontSizeList3,
    } = this.state;
    return (
      <div className="BodyArea">
        <Canvas
          fontSizeHead={Number(fontSizeHead)}
          fontSizeList0={Number(fontSizeList0)}
          fontSizeList1={Number(fontSizeList1)}
          fontSizeList2={Number(fontSizeList2)}
          fontSizeList3={Number(fontSizeList3)}
        />
        <Preview />
      </div>
    );
  }
}
