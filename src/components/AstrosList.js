import React, { Component } from 'react';
import { connect } from 'react-redux';

import { astrosAtTheISS } from "./helpers/componentHelper";
import Astro from './Astro';

class AstroList extends Component {

  setTotalAmount() {
    return astrosAtTheISS(this.props.astros.people).length
  }

  generateTotalAmount() {
    return (
      <div className="p-2 totalAmount text-center">
        <span>
          Total amount: {this.setTotalAmount()} people on ISS
        </span>
      </div>
    );
  }

  render() {
    return (
      <div className="col-md-4 p-2 listWrap">
        <Astro />
        {this.generateTotalAmount()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    astros: state.astros,
  }
}

export default connect(mapStateToProps)(AstroList)

