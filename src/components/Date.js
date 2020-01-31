import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';


class Data extends Component {

  render() {
    return (
      <div className="col-md-4 p-2 ">
        <div className="p-2 date">
          <h3>Current UTC time: <Timestamp time={this.props.location.timestamp} format='time' autoUpdate={60} /></h3>
          <span><Timestamp time={this.props.location.timestamp} format='date' autoUpdate /></span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
  }
}

export default connect(mapStateToProps)(Data)

