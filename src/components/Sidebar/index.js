// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <nav>
          <ul>
            <li><Link to="/">Overview</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
