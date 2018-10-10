import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pantry extends Component {
  render() {
    return (
      <div>
        Pantry
      </div>
    );
  }
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Pantry);