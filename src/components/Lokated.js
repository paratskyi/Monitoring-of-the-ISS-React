import React, { Component } from 'react';

import { getLocationAction } from '../actions/app';
import { connect } from 'react-redux';

class Lokated extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-8 p-2 ">
                <div className="p-2 lokated">
                    <h3>ISS is now lokated at:</h3>
                    <span className="locationText">
                        {console.log(this.props)}
                        latitude:
                        longitude:
                    </span>
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
        getLocation: (callback) => {
            dispatch(getLocationAction(callback));
        }
    })
)(Lokated);