import React, { Component } from 'react';

import MapContainer from './MapContainer';
import AstroList from './AstrosList';

class Content extends Component {

  render() {
    return (
      <div className='content'>
        <MapContainer />
        <AstroList />
      </div>
    );
  }
}

export default Content;
