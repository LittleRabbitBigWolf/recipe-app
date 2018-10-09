import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
// import {Provider} from 'react-redux';

// import store from './ducks/store';
import routes from './routes';

import './App.css';

import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <HashRouter>
      <div className="App">
      {routes}
          <Login/>
          <Logout/>
      </div>
      </HashRouter>
      // </Provider>
    );
  }
}

export default App;
