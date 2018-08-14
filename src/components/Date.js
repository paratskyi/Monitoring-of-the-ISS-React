import React, { Component } from 'react';
import Timestamp from 'react-timestamp';

class Data extends Component {
    
    render() {
        console.log(this.props.locationData);
        return (
            <div className="col-md-4 p-2 ">
                <div className="p-2 date">
                    <h3>Current UTC time: <Timestamp time={this.props.locationData.timestamp} format='time' autoUpdate={60}/></h3>
                    <span><Timestamp time={this.props.locationData.timestamp} format='date' autoUpdate/></span>
                </div>
            </div>
        );
    }
}

export default Data;

