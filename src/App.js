import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.css';

import { getProductsAction } from './actions/app';
import { connect } from 'react-redux';

let locationData;
let astrosAmount;

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      products: ''
    }

  }

  componentDidMount() {
    /*setInterval(() => {*/
    this.props.getProducts()
    /*}, 5000);*/
  }

  render() {
    return (
      <div className="App container">

        {console.log(this.props)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.app.products
  }
}



export default connect(
  mapStateToProps,
  dispatch => ({
    getProducts: () => {
      dispatch(getProductsAction());
    }
  })
)(App);
// <Header  locationData={this.state.locationData} />
  //      <Content locationData={this.state.locationData} astrosAmount={this.state.astrosAmount} />