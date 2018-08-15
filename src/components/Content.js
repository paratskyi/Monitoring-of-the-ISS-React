import React, { Component } from 'react';
import MapContainer from './MapContainer';
import AstroList from './AstrosList';

import { getAstrosAction } from '../actions/app';
import { getLocationAction } from '../actions/app';
import { connect } from 'react-redux';

class Content extends Component {

  componentWillMount() {
    /*setInterval(() => {*/
    this.props.getAstros()
    this.props.getLocation()
    /*}, 5000);*/
}

  render() {
    return (
        <div className='row'>
            <MapContainer />
            <AstroList />
        </div>
    );
  }
}

export default connect(
  state => ({
      astros: state.appAmount.astros,
      location: state.app.location
  }),
  dispatch => ({
      getAstros: (callback) => {
          dispatch(getAstrosAction(callback));
      },
      getLocation: () => {
        dispatch(getLocationAction());
    }
  })
)(Content);

// <MapContainer />

