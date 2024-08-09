// src/components/RecentActivityWidget.js

import React from 'react'
import './index.css'

const activities = [
  'User A logged in',
  'User B updated their profile',
  'User C made a purchase',
  'User D logged out',
]

const RecentActivityWidget = () => (
  <div className="recent-activity-widget">
    <h3>Recent Activity</h3>
    <ul>
      {activities.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
  </div>
)

export default RecentActivityWidget
