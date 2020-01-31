import React, { Component } from 'react';
import { connect } from 'react-redux';

import { astrosAtTheISS } from "./helpers/componentHelper";

class Astro extends Component {

  generateListOfAstros() {
    return astrosAtTheISS(this.props.astros.people).map(function (astro, index) {
        return <div key={index} className='astro p-2 mb-2 d-md-flex'>
          <i className='fas fa-user-circle'></i>
          <span>{astro.name}</span>
        </div>
      
    })
  }

  generateListOfPeople() {
    return (
      <div className='p-2 astrosList'>
        {
          this.generateListOfAstros()
        }
      </div>
    )
  }

  render() {
    return this.generateListOfPeople()
  }
}

const mapStateToProps = state => {
  return {
    astros: state.astros,
  }
}

export default connect(mapStateToProps)(Astro)