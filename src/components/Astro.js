import React, { Component } from 'react';

class Astro extends Component {

  showPeople() {
    return this.props.astrosAmount.people.map(function (el, index) {
      if (el.craft === 'ISS') {
        return <div key={index} className='astro p-2 mb-2 d-md-flex'>
          <i className='fas fa-user-circle'></i>
          <span>{el.name}</span>
        </div>
      }
    });
  };

  render() {
    return (
      <div className='p-2 astrosList'>
        {this.showPeople()}
      </div>
    );
  }
}

export default Astro;