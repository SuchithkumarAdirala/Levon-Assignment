// src/components/PieChartWidget.js

import React from 'react'
import {PieChart, Pie, Tooltip, Legend, Cell} from 'recharts'
import './index.css'

const data = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
  {name: 'Group C', value: 300},
  {name: 'Group D', value: 200},
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const PieChartWidget = () => (
  <div className="pie-chart-widget">
    <h3>User Demographics</h3>
    <PieChart width={600} height={300}>
      <Pie data={data} dataKey="value" outerRadius={150} fill="#8884d8" label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
)

export default PieChartWidget
