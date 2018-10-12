import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import readXlsxFile from 'read-excel-file';
import _ from 'lodash';

class LineChart extends Component {
  constructor(props){
    super(props);
    let config = {
      chart: {
        polar: true
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };
    this.state = {config : config};
  }


  uploadFile = (event) => {
    event.preventDefault();
    readXlsxFile(document.getElementById('file').files[0]).then((rows) => {
      let newState = _.clone(this.state).config;
      console.log(rows, newState)
      newState.xAxis.categories = rows[0];
      newState.series[0].data = rows[1];
      this.setState({config: newState});
    })
  }

  render() {
    return (
      <div>
        <div className="inputfile">
      <form onSubmit={this.uploadFile} encType="multipart/form-data">
      <input type="file" id="file" name="fileToUpload" />
      <input type="submit" />
      </form>
        </div>
        <div className="chart">
          <ReactHighcharts config={this.state.config} ref="chart"></ReactHighcharts></div>
      </div>
    );
  }
}

export default LineChart;