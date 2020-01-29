import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

import { connect } from 'react-redux';
import { getAstros, getLocation } from '../actions/data';


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

const mapStateToProps = state => {
  return {
    astros: state.astros,
    location: state.location,
    isLoading: state.dataIsLoading,
    hasErrored: state.dataHasErrored,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAstros: () => dispatch(getAstros()),
    getLocation: () => dispatch(getLocation()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMarker)


