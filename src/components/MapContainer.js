import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
 

class Map extends Component {
  render() {
    
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: +this.props.locationData.iss_position.latitude, lng: +this.props.locationData.iss_position.longitude }}
        defaultZoom={4}
      >
      </GoogleMap>
    ));
    return (
      <div className="col-md-8 p-2 mapWrap">
      
        <GoogleMapExample
          containerElement={<div style={{ height: `100%`, width: '100%' }} />}
          mapElement={<div id="map" className="p-2" style={{ height: `100%` }} />}
        >
        </GoogleMapExample>
      </div>
    );
  }
};
export default Map;


                    
                 