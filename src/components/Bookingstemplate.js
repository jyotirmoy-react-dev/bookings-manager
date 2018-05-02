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
        
        
        return (
            <div>
                <h2>Bookings Template</h2>
                <hr/>
                <div className="panel panel-default">
                <div className="panel-body">
                    Dear Customer,
                    <p>Thank you for contacting us here are the details of your booking.</p>
                    <br/>
                    <table className="table table-bordered" style={{'width':'50%'}}>
                        <tbody>
                        <tr><td><label>Hotel Name:</label></td><td>{this.props.hotelDetails.HName}</td></tr>
                        <tr><td><label>Hotel Contact Person:</label></td><td>{this.props.hotelDetails.HContact}</td></tr>
                        <tr><td><label>Hotel Phone:</label></td><td>{this.props.hotelDetails.HPhone}</td></tr>
                        <tr><td><label>Hotel Email Id:</label></td><td>{this.props.hotelDetails.HEmail}</td></tr>
                        <tr><td><label>Hotel Address:</label></td><td>{this.props.hotelDetails.HAddress}</td></tr>
                        </tbody>
                    </table>
               
                <br/>
                <h4>Room type Details Are As Follows:</h4>
                <table className="table table-bordered table-strpped" style={{'width':'50%'}}>
                <thead>
                    <tr>
                    <th>Room Type</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.hotelroomtypes.map(item => {
                            return <tr><td>{item.RCode}</td><td></td></tr>
                        })}</tbody>
                </table>
                <h4>Transport  Details Are As Follows:</h4>
                <table className="table table-bordered table-strpped" style={{'width':'50%'}}>
                    <thead>
                        <tr>
                        <th>Transportation</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.hotelTransports.map(item => {
                            return <tr><td>{item.TCode}</td><td></td></tr>
                        })}</tbody>
                </table>
                <br/>
                Thanks and Regards,
                </div>
                </div>
                
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