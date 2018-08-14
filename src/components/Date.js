import React, { Component } from 'react';
import Timestamp from 'react-timestamp';

import { getLocationAction } from '../actions/app';
import { connect } from 'react-redux';

class Data extends Component {

    constructor(props) {
        super(props);
    }

    
    render() {

        return (
            <div className="col-md-4 p-2 ">
                <div className="p-2 date">
                {console.log(this.props)}
                    <h3>Current UTC time: <Timestamp time={this.props.timestamp} format='time' autoUpdate={60} /></h3>
                    <span><Timestamp time={this.props.timestamp} format='date' autoUpdate /></span>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        location: state.app.location
    }),
    dispatch => ({
        getLocation: () => {
            dispatch(getLocationAction());
        }
    })
)(Data);

