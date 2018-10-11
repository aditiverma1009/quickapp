import React from 'react';
import ReactDOM from 'react-dom';
import Template1 from './Components/Templates/Template1';

const mockData1 = {
  h1Text: 'Heading',
  h1Style: {
    fontSize: '40px',
  },
  liText: ['this', 'is', 'list of', 'list items'],
  liStyle: {
    fontSize: '20px',
  },
  globalStyle: {
    display: 'flex',
  },
};

const Render = () => {
  ReactDOM.render(
    <Template1 data={mockData1} />,
    document.getElementById('root'),
  );
};

export default Render;
