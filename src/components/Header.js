import React, { Component } from 'react';

import Located from './Located';
import Date from './Date';

class Header extends Component {

  render() {
    return (
      <div className='header'>
        <Located />
        <Date />
      </div>
    );
  }
}

export default Header;