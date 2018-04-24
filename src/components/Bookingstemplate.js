import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getHotelDetails, getHotelCategoryList} from '../actions/hotelactions';
import { getHotelByRoomType} from '../actions/roomtypeactions';
import { getHotelByTransports} from '../actions/transportactions';
class Bookingstemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    componentWillMount() {
        this.props.getHotelCategoryList(this.props.params.hotelid);
        this.props.getHotelByRoomType(this.props.params.hotelid);
        this.props.getHotelDetails(this.props.params.hotelid);
        this.props.getHotelByTransports(this.props.params.hotelid);
    }
    
    render () {
        
        console.log(this.props.hotelDetails);
        return (
            <div>
                <h2>Bookings Template</h2>
                <hr/>
                Dear Customer,
                    <p>Thank you form contacting us here are the details of your booking.</p>
                    <br/>
                <label>Hotel Name:</label>{this.props.hotelDetails.HName}<br/>
                <label>Hotel Contact Person:</label>{this.props.hotelDetails.HContact}<br/>
                <label>Hotel Phone:</label>{this.props.hotelDetails.HPhone}<br/>
                <label>Hotel Email Id:</label>{this.props.hotelDetails.HEmail}<br/>
                <h4>Room type Details Are As Follows:</h4>
                <table>
                <thead>
                    <th>Room Type</th>
                    <th>Price</th>
                </thead>
                <tbody>
                        {this.props.hotelroomtypes.map(item => {
                            return <tr><td>{item.RCode}</td><td>______</td></tr>
                        })}</tbody>
                </table>
                <h4>Transport  Details Are As Follows:</h4>
                <table>
                    <thead>
                        <th>Transportation</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                        {this.props.hotelTransports.map(item => {
                            return <tr><td>{item.TCode}</td><td>______</td></tr>
                        })}</tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    hotelDetails: state.hotelsall.hotelDetails,
    hotelcategories: state.hotelsall.hotelbycategory,
    hotelroomtypes: state.roomtypesall.hotelbyroomtype,
    hotelTransports: state.transportall.hotelsbytransport
})
function mapDispatchToProps(dispatch)  {
    return {
        getHotelDetails(id){
            dispatch(getHotelDetails(id));
        },
        getHotelCategoryList(id){
            dispatch(getHotelCategoryList(id))
        },
        getHotelByRoomType(id){
            dispatch(getHotelByRoomType(id));
        },
        getHotelByTransports(id){
            dispatch(getHotelByTransports(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bookingstemplate)