import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import { connect } from 'react-redux';
 

class Map extends Component {
  render() {
    if(this.props.location.message === 'success'){
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: +this.props.location.iss_position.latitude, lng: +this.props.location.iss_position.longitude }}
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
  }else{return 'sdgfdsg'}
}
};

export default connect(
  state => ({
    location: state.app.location
}),
dispatch => ({
    
})
)(Map);


                    
                 