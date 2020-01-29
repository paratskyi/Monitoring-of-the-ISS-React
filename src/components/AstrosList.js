import React, { Component } from 'react';
import Astro from './Astro';

import { connect } from 'react-redux';

import { getAstros, getLocation } from '../actions/data';


class AstroList extends Component {

    setTotalAmount() {
        if (this.props.astros.message === 'success') {
            let totalAmount = [];

            this.props.astros.people.map(function (el) {
                if (el.craft === 'ISS') {
                    totalAmount.push(el);
                }
            })
            return totalAmount.length
        } else {
            return (<span>Loading...</span>);
        }
    }

    render() {
        return (
            <div className="col-md-4 p-2 listWrap">
                <Astro />
                <div className="p-2 totalAmount text-center">
                    <span>
                        Total amount: {this.setTotalAmount()} people on ISS
                    </span>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AstroList)

