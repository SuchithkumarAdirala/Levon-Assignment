// src/components/LineChartWidget.js

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import './index.css'

const data = [
  {name: 'Jan', uv: 4000},
  {name: 'Feb', uv: 3000},
  {name: 'Mar', uv: 2000},
  {name: 'Apr', uv: 2780},
  {name: 'May', uv: 1890},
  {name: 'Jun', uv: 2390},
  {name: 'Jul', uv: 3490},
]

const LineChartWidget = () => (
  <div className="line-chart-widget">
    <h3>User Activity Over Time</h3>
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{r: 8}} />
    </LineChart>
  </div>
)

export default LineChartWidget
