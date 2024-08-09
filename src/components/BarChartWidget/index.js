// src/components/BarChartWidget.js

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import './index.css'

const data = [
  {name: 'Jan', sales: 4000},
  {name: 'Feb', sales: 3000},
  {name: 'Mar', sales: 2000},
  {name: 'Apr', sales: 2780},
  {name: 'May', sales: 1890},
  {name: 'Jun', sales: 2390},
  {name: 'Jul', sales: 3490},
]

const BarChartWidget = () => (
  <div className="bar-chart-widget">
    <h3>Sales Data</h3>
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" fill="#82ca9d" />
    </BarChart>
  </div>
)

export default BarChartWidget
