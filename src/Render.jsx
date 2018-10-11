import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './Components';

const mockData1 = {
  h1Text: '1st Page',
  h1Style: {
    fontSize: '40px',
  },
  liText: ['List', 'for', 'page 1'],
  liStyle: {
    fontSize: '20px',
  },
  globalStyle: {
    display: 'flex',
  },
};

const mockData2 = {
  h1Text: '2nd Page',
  h1Style: {
    fontSize: '40px',
  },
  liText: ['List', 'for', 'page 1'],
  liStyle: {
    fontSize: '20px',
  },
  globalStyle: {
    display: 'flex',
  },
};

const mockData3 = {
  h1Text: '3rd Page',
  h1Style: {
    fontSize: '40px',
  },
  liText: ['List', 'for', 'page 1'],
  liStyle: {
    fontSize: '20px',
  },
  globalStyle: {
    display: 'flex',
  },
};

const pages = [{
  index: 1,
  template: 'Template1',
  data: mockData1,
}, {
  index: 2,
  template: 'Template1',
  data: mockData2,
}, {
  index: 3,
  template: 'Template1',
  data: mockData3,
}];

const Render = () => {
  ReactDOM.render(
    <Pages pages={pages} />,
    document.getElementById('root'),
  );
};

export default Render;
