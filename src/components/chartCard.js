import React from 'react'
import PropTypes from "prop-types"

import { Doughnut } from 'react-chartjs-2';

const ChartCard = class extends React.Component {
  constructor(props) {
    super(props);

    let labels = []
    let data = []
    let colors = []
    let total = 0;

    for (let sectionData of this.props.chartData) {
      labels.push(sectionData.label);
      colors.push(sectionData.color);
      data.push(sectionData.data);
      total += sectionData.data
    }

    this.state = { 
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors,
          hoverBackgroundColor: colors
        }]
      }, 
      total: total
      };
  }

    render() {
      return (
        <div className="chart-card card">
          <div className="titles">
            <span className="chart-title">{this.props.chartTitle}</span>
            <span className="chart-subtitle">{this.props.chartSubtitle}</span>
          </div>
          <div className="chart-container">
            <Doughnut 
              data={this.state.data} 
              width={200}
              height={200}
              options={{ maintainAspectRatio: false, cutoutPercentage: 80 }}
              legend={{display: false}}
            />
            <div className="chart-total">{this.state.total}</div>
          </div>
          <div className="chart-numbers">
            {this.props.chartData.map((item, index) => (
              <div className="number-section">
                <div>{item.label}</div>
                <div className="value" style={{color: item.color}}>{item.data}</div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  }

  ChartCard.propTypes = {
    chartTitle: PropTypes.string.isRequired,
    chartSubtitle: PropTypes.string.isRequired,
    chartData: PropTypes.array.isRequired,
  }
  
  
  export default ChartCard