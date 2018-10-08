import React, { Component } from 'react';
import './App.css';

import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Login/>
          <Logout/>
      </div>
    );
  }
}

export default App;
