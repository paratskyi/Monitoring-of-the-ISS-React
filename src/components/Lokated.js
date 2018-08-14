import React, { Component } from 'react';

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
                    {console.log(this)}
                        latitude: {this.props.locationData.iss_position.latitude}&nbsp;
                        longitude: {this.props.locationData.iss_position.longitude}
                    </span>
                </div>
            </div>
        );
    }
}

export default Lokated;