import React, { Component } from 'react';
import Lokated from './Lokated';
import Date from './Date';

import { getLocationAction } from '../actions/app';
import { connect } from 'react-redux';

class Header extends Component {

    componentWillMount() {
        setInterval(() => {
            this.props.getLocation()
        }, 5000);
    }

    render() {
        return (
            <div className='row'>
                <Lokated />
                <Date />
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
)(Header);