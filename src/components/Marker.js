import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Marker } from 'react-google-maps';


class CustomMarker extends Component {

  render() {

    return (
      <div>
        <Marker icon={{ url: './iss.png' }} position={{ lat: +this.props.location.iss_position.latitude, lng: +this.props.location.iss_position.longitude }} />
      </div>
    );
  }

};

const mapStateToProps = state => {
  return {
    location: state.location,
  }
}

export default connect(mapStateToProps)(CustomMarker)
