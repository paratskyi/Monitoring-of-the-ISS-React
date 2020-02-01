import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Content from './components/Content';
import { getAstros, getLocation } from './actions/data';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  getData() {
    this.props.getAstros();
    this.props.getLocation();
  }

  updateData() {
    this.getData();
    setInterval(() => this.getData(), 5000);
  }

  isDataFetchSuccess() {
    return this.props.location.message === 'success' && this.props.location.message === 'success';
  }

  generateApp() {
    return (
      <div className='App'>
        <Header />
        <Content />
      </div>
    );
  }

  generatePreloader() {
    return <img src="./preloader.gif" alt="Loading..." />;
  }

  generateErrorMessage() {
    return <h2>Something went wrong... Try again later</h2>;
  }

  componentDidMount() {
    this.updateData();
  }

  render() {
    if (this.props.hasErrored) return this.generateErrorMessage();
    
    if (!this.isDataFetchSuccess()) return this.generatePreloader();

    return this.generateApp();
  }
}

const mapStateToProps = state => {
  return {
    astros: state.astros,
    location: state.location,
    hasErrored: state.dataHasErrored,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAstros: () => dispatch(getAstros()),
    getLocation: () => dispatch(getLocation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
