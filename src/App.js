import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.css';

import { getLocationAction } from './actions/app';
import { connect } from 'react-redux';

let locationData;
let astrosAmount;

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      location: ''
    }

  }

  componentDidMount() {
    /*setInterval(() => {*/
    this.props.getLocation()
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

export default connect(
  state => ({
      location: state.app.location
  }),
  dispatch => ({
    getLocation:() => {            
          dispatch(getLocationAction());
      }
  })
)(App);
// <Header  locationData={this.state.locationData} />
  //      <Content locationData={this.state.locationData} astrosAmount={this.state.astrosAmount} />