import React, { Component } from 'react';
import { connect } from 'react-redux';
//Local Imports
import { ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl, Modal } from 'react-bootstrap';
import { fetAllTransports, addHotelToTransport, getHotelByTransports, deleteHotelTrasnport} from '../actions/transportactions';

class Transporthoteladd extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false, listingDetail: '', transport:'' };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.updateTransportType = this.updateTransportType.bind(this);
        this.deleteHotelTrasnport = this.deleteHotelTrasnport.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }
    open(e) {
        e.preventDefault();
        let self = this;
        this.setState({ showModal: true }, () => {
            this.props.fetAllTransports();
            this.props.getHotelByTransports(this.props.hotelid);
        });
    }
    addHotelToTransport(){
        let send_data = {
            
            "TCode": this.state.transport,
            "HCode": this.props.hotelid,
            "Price": "--"
        }
        this.props.addHotelToTransport(send_data);

    }
    updateTransportType(e){
        this.setState({transport:e.target.value});
    }
    deleteHotelTrasnport(transid){
        this.props.deleteHotelTrasnport(this.props.hotelid,transid);
    }
    render () {
        let transports = this.props.transports[0] ? this.props.transports[0]: []; let self = this;
        return (
            <div>
                <a href=""
                    onClick={this.open.bind(this)}
                >  <span className="glyphicon glyphicon-road"></span>
                </a>

                <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
                    <Modal.Header closeButton>
                        <Modal.Title>Add {this.props.hname} to  Transport Category:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="input-group">
                                <select className="form-control" name="RName" onChange={this.updateTransportType.bind(this)}>
                                    <option>Select Transport</option>
                                    {transports.map((item) => {
                                        return <option key={item.id} value={item.TName} >{item.TName}</option>
                                    })}
                                </select>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" onClick={this.addHotelToTransport.bind(this)}>Save</button>
                                </span>
                            </div>
                            <hr />
                            <table className="table table-stripped" style={{ 'width': '50%' }}>
                                <thead>
                                    <th>Transport</th>
                                    <th>Delete</th>
                                </thead>
                                <tbody>
                                    {this.props.hoteltransports.map(item => {
                                        return <tr key={item.id}>
                                            <td>{item.TCode}</td>
                                        <td>
                                                <a href="" onClick={(e)=>{
                                                    e.preventDefault();
                                                    self.deleteHotelTrasnport(item.id);
                                                }}><span className="glyphicon glyphicon-trash"></span></a>
                                        </td>
                                        </tr>;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        transports: state.transportall.transports,
        hoteltransports: state.transportall.hotelsbytransport
    }
}
function mapDispatchToProps(dispatch) {
    return {       
        fetAllTransports(){
            dispatch(fetAllTransports());
        },
        addHotelToTransport(send_data){
            dispatch(addHotelToTransport(send_data));
        },
        getHotelByTransports(id){
            dispatch(getHotelByTransports(id))
        },
        deleteHotelTrasnport(hotelid,transid){
            dispatch(deleteHotelTrasnport(hotelid,transid));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Transporthoteladd);