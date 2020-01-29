import React, { Component } from 'react';

import { connect } from 'react-redux';

class Located extends Component {

  render() {

    return (
      <div className="col-md-8 p-2 ">
        <div className="p-2 Located">
          <h3>ISS is now Located at:</h3>
          <span className="locationText">
            latitude: {this.props.location.iss_position.latitude}	&nbsp;
            longitude: {this.props.location.iss_position.longitude}
          </span>
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

export default connect(mapStateToProps)(Located)