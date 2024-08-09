// src/components/Header.js
import React, {Component} from 'react'
import './index.css' // Custom styles for Header

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">Dashboard</div>
        <div className="actions">
          <button onClick={this.props.toggleTheme}>
            {this.props.darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <div className="user-profile">User Profile</div>
          <div className="notifications">Notifications</div>
        </div>
      </header>
    )
  }
}

export default Header
