import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';

import 'bulma'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <div className="main">
          <Navbar/>
          <Dashboard/>
        </div>
      </div>
    );
  }
}

export default App;
