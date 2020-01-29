import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getAstros, getLocation } from '../actions/data';

class Located extends Component {

    render() {
        if (this.props.location.message === 'success') {
            return (
                <div className="col-md-8 p-2 ">
                    <div className="p-2 Located">
                        <h3>ISS is now Located at:</h3>
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

const mapStateToProps = state => {
    return {
        astros: state.astros,
        location: state.location,
        isLoading: state.dataIsLoading,
        hasErrored: state.dataHasErrored,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAstros: () => dispatch(getAstros()),
        getLocation: () => dispatch(getLocation()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Located)