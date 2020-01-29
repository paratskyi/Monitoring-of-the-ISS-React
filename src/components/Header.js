import React, { Component } from 'react';
import Located from './Located';
import Date from './Date';

import { getAstros, getLocation } from '../actions/data';
import { connect } from 'react-redux';

class Header extends Component {

    componentWillMount() {
        this.props.getLocation()
        setInterval(() => {
            this.props.getLocation()
        }, 5000);
    }

    render() {
        return (
            <div className='row'>
                <Located />
                <Date />
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)