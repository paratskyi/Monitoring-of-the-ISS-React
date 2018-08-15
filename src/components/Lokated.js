import React, { Component } from 'react';

import { connect } from 'react-redux';

class Lokated extends Component {

    render() {
        if (this.props.location.message === 'success') {
            return (
                <div className="col-md-8 p-2 ">
                    <div className="p-2 lokated">
                        <h3>ISS is now lokated at:</h3>
                        <span className="locationText">
                            latitude: {this.props.location.iss_position.latitude}	&nbsp;
                        longitude: {this.props.location.iss_position.longitude}
                        </span>
                    </div>
                </div>
            )
        } else {
            return (
                <span>Loading...</span>
            )
        }
    }
}

export default connect(
    state => ({
        location: state.app.location
    }),
    dispatch => ({

    })
)(Lokated);