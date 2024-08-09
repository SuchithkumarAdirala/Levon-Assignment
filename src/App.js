// src/App.js

import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings' // Example settings component
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: false,
    }
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    const {darkMode} = this.state

    return (
      <Router>
        <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
          <Header toggleDarkMode={this.toggleDarkMode} darkMode={darkMode} />
          <div className="main-container">
            <Sidebar />
            <main className="content">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/settings" component={Settings} />
                {/* Add more routes as needed */}
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
