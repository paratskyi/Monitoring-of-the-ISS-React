import React, { Component } from 'react';
import Astro from './Astro';

class AstroList extends Component {

    setTotalAmount() {
        
        let totalAmount = [];

        this.props.astrosAmount.people.map(function (el) {
            if (el.craft === 'ISS') {
                totalAmount.push(el);
            }
        });
        return totalAmount.length
    }

    render() {
        return (
            <div className="col-md-4 p-2 listWrap">

                <Astro astrosAmount={this.props.astrosAmount} />

                <div className="p-2 totalAmount text-center">
                    <span>
                        Total amount: {this.setTotalAmount()} people on ISS
                    </span>
                </div>
            </div>
        );
    }
}

export default AstroList;

