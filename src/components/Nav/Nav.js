import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/userReducer';

import Login from '../Login/Login';
import Logout from '../Logout/Logout';

class Nav extends Component {

  componentDidMount(){
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Login/>
        <Logout/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, { getUser })(Nav);