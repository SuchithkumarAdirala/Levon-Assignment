// src/components/ThemeToggle.js
import React, {Component} from 'react'

class ThemeToggle extends Component {
  render() {
    return (
      <button onClick={this.props.toggleTheme}>
        {this.props.darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    )
  }
}

export default ThemeToggle
