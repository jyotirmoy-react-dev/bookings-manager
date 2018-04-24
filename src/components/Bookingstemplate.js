import React, { Component } from 'react'

class Bookingstemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render () {
        return (
            <div>
                <h2>{this.props.params.hotelid}</h2>
            </div>
        )
    }
}

export default Bookingstemplate