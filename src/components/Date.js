import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';


class Data extends Component {

  timestamp() {
    return this.props.location.timestamp;
  }

  render() {
    return (
      <div className='shadowy-block date'>
        <h3>Current UTC time: <Timestamp time={this.timestamp()} format='time' autoUpdate={60} /></h3>
        <span><Timestamp time={this.timestamp()} format='date' autoUpdate /></span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps)(Data);

