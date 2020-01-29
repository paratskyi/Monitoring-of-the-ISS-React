import React, { Component } from 'react';
import Timestamp from 'react-timestamp';

import { connect } from 'react-redux';

import { getAstros, getLocation } from '../actions/data';


class Data extends Component {

    render() {
        if (this.props.location.message === 'success') {
            return (
                <div className="col-md-4 p-2 ">
                    <div className="p-2 date">
                        <h3>Current UTC time: <Timestamp time={this.props.location.timestamp} format='time' autoUpdate={60} /></h3>
                        <span><Timestamp time={this.props.location.timestamp} format='date' autoUpdate /></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Data)

