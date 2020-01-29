import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import MyMarker from './Marker';

import { connect } from 'react-redux';


class MapContainer extends Component {

  shouldComponentUpdate() {
    if (this.props.location.message === 'success') {
      return false;
    } else {
      return true;
    }
  }

  render() {

    if (this.props.location.message === 'success') {
      const Map = withGoogleMap(props => (
        <GoogleMap
          defaultCenter={{ lat: +this.props.location.iss_position.latitude, lng: +this.props.location.iss_position.longitude }}
          defaultZoom={3}
        >
          <MyMarker />
        </GoogleMap>
      ));
      return (
        <div className="col-md-8 p-2 mapWrap">

          <Map
            isMarkerShown
            containerElement={<div style={{ height: `100%`, width: '100%' }} />}
            mapElement={<div id="map" className="p-2" style={{ height: `100%` }} />}
          >
          </Map>

        </div>
      );
    } else {
      return (
        <div id="map" className="p-2" style={{ height: `744px`, width: `540px` }}>Loading...</div>
      )
    }
  }

};

const mapStateToProps = state => {
  return {
    location: state.location,
  }
}

export default connect(mapStateToProps)(MapContainer)



