import React from 'react'
import ChartCard from './chartCard'
import TableCard from './tableCard'
import {chart1Data, chart2Data, table1Data, table2Data} from '../dummyData';

const Dashboard = class extends React.Component {
    render() {
      return (
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div className="charts-section">
            <ChartCard 
              chartTitle={chart1Data.chartTitle}
              chartSubtitle={chart1Data.chartSubtitle}
              chartData={chart1Data.chartData}
            />
            <ChartCard 
              chartTitle={chart2Data.chartTitle}
              chartSubtitle={chart2Data.chartSubtitle}
              chartData={chart2Data.chartData}
            />
          </div>
          <div className="tables-section">
            <TableCard cardTitle="Approvals In My Queue" tableData={table1Data}/>
            <TableCard cardTitle="My Open Requests" tableData={table2Data}/>
          </div>
        </div>
      )
    }
  }
  
  export default Dashboard