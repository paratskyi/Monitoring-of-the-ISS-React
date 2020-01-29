import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getAstros, getLocation } from '../actions/data';


class Astro extends Component {

  componentWillMount() {
    /*setInterval(() => {*/
    this.props.getAstros()
    /*}, 5000);*/
  }

  showPeople() {
    if (this.props.astros.message === 'success') {
      return this.props.astros.people.map(function (el, index) {
        if (el.craft === 'ISS') {
          return <div key={index} className='astro p-2 mb-2 d-md-flex'>
            <i className='fas fa-user-circle'></i>
            <span>{el.name}</span>
          </div>
        }
      })
    }
  }

  render() {
    return (
      <div className='p-2 astrosList'>
        {this.showPeople()}
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Astro)