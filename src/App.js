import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App container">
         <Header />
         <Content />
      </div>
    );
  }
}

export default App;
// <Header  locationData={this.state.locationData} />
  //      <Content locationData={this.state.locationData} astrosAmount={this.state.astrosAmount} />