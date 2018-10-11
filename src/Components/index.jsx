import React from 'react';
import PageScroll from './PageScroll';
import Template1 from './Templates/Template1';

const lookupTemplate = {
    Template1: Template1
}

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

const RenderAllPages = ({pagesList, pageNumber}) => {
    const Pages = pagesList.map((p)=>{
        const { index, data} = p;
        const TemplateName = lookupTemplate[p.template];
        return (
            <TemplateName data={data} key={index} />
        );
    });
    console.log("page number: ", pageNumber);
    return Pages[pageNumber];
}

class App extends React.Component {
    state = {
        pageNumber: 0,
        pages: [{
            index: 1,
            template: 'Template1',
            data: mockData1
        }, {
            index: 2,
            template: 'Template1',
            data: mockData2,
        }, {
            index: 3,
            template: 'Template1',
            data: mockData3
        }]
    }

    backPage = ()=>{
        let {pageNumber} = this.state;
        pageNumber = pageNumber-1 >= 0 ? pageNumber - 1 : 0;
        this.setState({
            pageNumber: pageNumber,
        });
    }

    nextPage=()=>{
        let { pages, pageNumber } = this.state;
        const length = pages.length;
        pageNumber = pageNumber + 1 < length ? pageNumber + 1 : length-1;
        this.setState({
            pageNumber: pageNumber,
        });
    }

    render() {
        const {pages, pageNumber} = this.state;
        const {backPage, nextPage} = this;
        const pageToDisplay = <RenderAllPages pagesList={pages} pageNumber={pageNumber} />;
        return (
            <div>
                {pageToDisplay}
                <PageScroll backPage={backPage} nextPage={nextPage} />
            </div>
        );
    }
}

export default App;
