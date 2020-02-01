import React, { Component } from 'react';
import { connect } from 'react-redux';

import { astrosAtTheISS } from "./helpers/componentHelper";
import Astro from './Astro';

class AstroList extends Component {

  setTotalAmount() {
    return astrosAtTheISS(this.props.astros.people).length;
  }

  generateTotalAmount() {
    return (
      <div className='shadowy-block astro-list_footer'>
        <span>
          Total amount: {this.setTotalAmount()} people on ISS
        </span>
      </div>
    );
  }

  render() {
    return (
      <div className='shadowy-block astro-list_wrap'>
        <div className='astro-list'>
          <Astro />
        </div>
        {this.generateTotalAmount()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    astros: state.astros,
  };
};

export default connect(mapStateToProps)(AstroList);

