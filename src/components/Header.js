import React, { Component } from 'react';
import Lokated from './Lokated';
import Date from './Date';

class Header extends Component {
  render() {
    return (
        <div className='row'>
            <Lokated locationData={this.props.locationData}/>
            <Date locationData={this.props.locationData}/>
        </div>
    );
  }
}

export default Header;