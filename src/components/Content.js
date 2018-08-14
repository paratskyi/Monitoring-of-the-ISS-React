import React, { Component } from 'react';
import MapContainer from './MapContainer';
import AstroList from './AstrosList';

class Content extends Component {
  render() {
    return (
        <div className='row'>
            <MapContainer locationData={this.props.locationData}/>
            <AstroList astrosAmount={this.props.astrosAmount}/>
        </div>
    );
  }
}

export default Content;