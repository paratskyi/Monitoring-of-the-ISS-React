import React, { Component } from 'react';
import { connect } from 'react-redux';

import { astrosAtTheISS } from "./helpers/componentHelper";

class Astro extends Component {

  generateListOfAstros() {
    return astrosAtTheISS(this.props.astros.people).map(function (astro, index) {
      return (
        <div key={index} className='shadowy-block astro'>
          <i className='fas fa-user-circle'></i>
          <span>{astro.name}</span>
        </div>
      );
    });
  }

  generateListOfPeople() {
    return this.generateListOfAstros();
  }

  render() {
    return this.generateListOfPeople();
  }
}

const mapStateToProps = state => {
  return {
    astros: state.astros,
  };
};

export default connect(mapStateToProps)(Astro);