// src/components/Settings.js

import React from 'react'
import './index.css'

class Settings extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    // Handle form submission
  }

  render() {
    return (
      <div className="settings">
        <h1>Settings Page</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="theme">Theme</label>
            <select id="theme" name="theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    )
  }
}

export default Settings
