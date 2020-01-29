import React, { Component } from 'react';
import MapContainer from './MapContainer';
import AstroList from './AstrosList';

import { getAstros, getLocation } from '../actions/data';
import { connect } from 'react-redux';

class Content extends Component {

    componentWillMount() {
        this.props.getAstros()
        this.props.getLocation()
        console.log(this.props)
        setInterval(() => {
            this.props.getAstros()
            this.props.getLocation()
            console.log(this.props)
        }, 5000);
    }

    render() {
        return (
            <div className='row'>
                <MapContainer />
                <AstroList />
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

export default connect(mapStateToProps, mapDispatchToProps)(Content)



