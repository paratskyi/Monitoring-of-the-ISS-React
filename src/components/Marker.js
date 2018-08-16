import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

import { connect } from 'react-redux';

class MyMarker extends Component {

  render() {

    if (this.props.location.message === 'success') {
      return (
        <div>
          <Marker icon={{ url: './iss.png' }} position={{ lat: +this.props.location.iss_position.latitude, lng: +this.props.location.iss_position.longitude }} />
        </div>
      );
    }
  }

};

export default connect(
  state => ({
    location: state.app.location
  }),
)(MyMarker);



