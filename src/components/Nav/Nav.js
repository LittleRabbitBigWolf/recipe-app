import React, { Component } from 'react';

import Login from '../Login/Login';
import Logout from '../Logout/Logout';

class Nav extends Component {
  render() {
    return (
      <div>
        <Login/>
        <Logout/>
      </div>
    );
  }
}

export default Nav;