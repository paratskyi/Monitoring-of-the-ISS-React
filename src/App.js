import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.css';

import { getAstros, getLocation } from './actions/data';
import { connect } from 'react-redux';

class App extends Component {

  componentWillMount() {
    this.props.getAstros()
    this.props.getLocation()
    setInterval(() => {
      this.props.getAstros()
      this.props.getLocation()
    }, 5000);
  }

  render() {
    if (this.props.location.message === 'success' && this.props.location.message === 'success') {
      return (
        <div className="App container">
          <Header />
          <Content />
        </div>
      );
    } else {
      return <span>Loading...</span>
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
