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
          defaultCenter={{ lat: 49.8685, lng: 52.8075 }}
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

export default connect(
  state => ({
    location: state.app.location
  }),
)(MapContainer);



