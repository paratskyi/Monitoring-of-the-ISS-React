import React, { Component } from 'react';
import { connect } from 'react-redux';

import { latitude, longitude } from "./helpers/componentHelper";

class Located extends Component {

  render() {
    return (
      <div className="col-md-8 p-2 ">
        <div className="p-2 located">
          <h3>ISS is now Located at:</h3>
          <span>
            latitude: {latitude(this.props)}	&nbsp;
            longitude: {longitude(this.props)}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps)(Located);