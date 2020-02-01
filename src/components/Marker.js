import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Marker } from 'react-google-maps';
import { latitude, longitude } from "./helpers/componentHelper";

class CustomMarker extends Component {

  render() {
    return (
      <div>
        <Marker icon={{ url: './iss.png' }} position={{ lat: latitude(this.props), lng: longitude(this.props) }} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps)(CustomMarker);
