import React from 'react';
import PageScroll from './PageScroll';
import Template1 from './Templates/Template1';

const lookupTemplate = {
    Template1: Template1
}

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
    }

    backPage = ()=>{
        let {pageNumber} = this.state;
        pageNumber = pageNumber-1 >= 0 ? pageNumber - 1 : 0;
        this.setState({
            pageNumber: pageNumber,
        });
    }

    nextPage=()=>{
        let { pageNumber } = this.state;
        const length = this.props.pages.length;
        pageNumber = pageNumber + 1 < length ? pageNumber + 1 : length-1;
        this.setState({
            pageNumber: pageNumber,
        });
    }

    render() {
        const {pages} = this.props;
        const {pageNumber} = this.state;
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
