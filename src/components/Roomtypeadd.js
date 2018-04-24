import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getHotelByRoomType, addToRoomtype, deleteHotelByRoomType} from '../actions/roomtypeactions';
class Roomtypeadd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RName:''
        };
    }

    componentWillMount() {
        this.props.getHotelByRoomtype(this.props.hotelid);
    }
    
    updateRoomtype(e){
        this.setState({
            RName:e.target.value
        });
    }
    addtoRoomtype(){
        let send_data = {
            "HCode": this.props.hotelid,
            "RCode": this.state.RName,
            "Price": "--",
            "hotelroomid": this.props.hotelid
        };
        this.props.addToRoomtype(send_data);
    }
    render () {
        let self = this;
        return (
            <div>
                <div className="input-group">
                    <select className="form-control" name="RName" onChange={this.updateRoomtype.bind(this)}>
                        <option>Select Roomtype</option>
                        {this.props.roomtypes.map((item) => {
                            return <option key={item.id} value={item.RName} >{item.RName}</option>
                        })}
                    </select>
                    <span className="input-group-btn">
                        <button className="btn btn-default" onClick={this.addtoRoomtype.bind(this)}>Save</button>
                    </span>
                </div>
                <hr />
                <table className="table table-stripped" style={{ 'width': '50%' }}>
                    <thead>
                        <th>Category</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.props.hotelbyroomtype.map((item, i) => {
                            return <tr key={i}><td>{item.RCode}</td>
                                <td><a href="" onClick={(e) => {
                                    e.preventDefault();
                                    self.props.deleteHotelByRoomType(self.props.hotelid, item.id);
                                }}><span className="glyphicon glyphicon-trash"></span></a></td></tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    hotelbyroomtype: state.roomtypesall.hotelbyroomtype
})

function mapDispatchToProps (dispatch) {
    return {
        getHotelByRoomtype(id){
            dispatch(getHotelByRoomType(id))
        },
        addToRoomtype(send_data){
            dispatch(addToRoomtype(send_data))
        },
        deleteHotelByRoomType(hotelid,roomid){
            dispatch(deleteHotelByRoomType(hotelid,roomid))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Roomtypeadd)