// src/components/Dashboard.js
import React, {Component} from 'react'
import LineChartWidget from '../LineChartWidget'
import BarChartWidget from '../BarChartWidget'
import PieChartWidget from '../PieChartWidget'
import RecentActivityWidget from '../RecentActivityWidget'
import './index.css' // Custom styles for Dashboard

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lineData: [],
      barData: [],
      pieData: [],
      recentActivity: [],
    }
  }

  componentDidMount() {
    // Fetch data from mock API
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const [lineResponse, barResponse, pieResponse, activityResponse] =
        await Promise.all([
          fetch('https://api.mock.com/line-chart-data').then(res => res.json()),
          fetch('https://api.mock.com/bar-chart-data').then(res => res.json()),
          fetch('https://api.mock.com/pie-chart-data').then(res => res.json()),
          fetch('https://api.mock.com/recent-activity').then(res => res.json()),
        ])

      this.setState({
        lineData: lineResponse,
        barData: barResponse,
        pieData: pieResponse,
        recentActivity: activityResponse,
      })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  render() {
    return (
      <div className="dashboard">
        <div className="widget">
          <LineChartWidget data={this.state.lineData} />
        </div>
        <div className="widget">
          <BarChartWidget data={this.state.barData} />
        </div>
        <div className="widget">
          <PieChartWidget data={this.state.pieData} />
        </div>
        <div className="widget">
          <RecentActivityWidget activities={this.state.recentActivity} />
        </div>
      </div>
    )
  }
}

export default Dashboard
