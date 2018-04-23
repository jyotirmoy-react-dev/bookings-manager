import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';

import moment from 'moment';
import {connect} from 'react-redux';
import {saveHotels} from '../../actions/hotelactions';

class Hoteladmin extends Component {
    constructor(props){
    	super(props);
      this.state = { showModal: false, listingDetail:'',imageUrl:'',uploadStat:''};
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
      this.saveHotels = this.saveHotels.bind(this);
      this.updateHotel = this.updateHotel.bind(this);
    }
    close() {
      this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true ,hotelDetails:{}});
    }
    updateHotel(e){
      let tempState = this.state.hotelDetails;
      let inputName = e.target.name;
      let inputValue = e.target.value;
      tempState[inputName] = inputValue;
      this.setState({hotelDetails:tempState});
    }
    saveHotels(e){
      e.preventDefault();      
      let send_data=this.state.hotelDetails;
      this.props.saveHotels(send_data);
      document.getElementById("n_frm").reset();
    }

    
    render() {
        return (
            <div className="class-name">             
            <button className="btn btn-primary" onClick={this.open.bind(this)}>
                <span className="glyphicon glyphicon-plus"></span> Add Hotel
            </button>

            <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
              <Modal.Header closeButton>
                <Modal.Title>Details</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{'width':'900px'}}>
              <div>
              <form id="n_frm" action="" method="POST">
                  <table className="table table-bordered">
                  <tbody>
                            <tr>
                                <td colSpan="2"><b>Hotel Name</b></td>
                                <td colSpan="2">
                                <input name="HName" type="text" className="form-control" onChange={this.updateHotel.bind(this)}  size="30" /></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><b>Hotel Contact</b></td>
                                <td colSpan="2">
                                <input name="HContact" type="text" className="form-control" onChange={this.updateHotel.bind(this)}  size="30" /></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><b>Hotel Phone</b></td>
                                <td colSpan="2">
                                <input name="HPhone" type="text" className="form-control" onChange={this.updateHotel.bind(this)}  size="30" /></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><b>Hotel Email</b></td>
                                <td colSpan="2">
                                <input name="HEmail" type="text" className="form-control" onChange={this.updateHotel.bind(this)}  size="30" /></td>
                            </tr>                            
                        </tbody>
                    </table>
                    <input type="submit" onClick={this.saveHotels.bind(this)} className="btn btn-primary"  value="Add Hotel" />
                </form>
              </div>
                </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return{

  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveHotels(send_data){
      dispatch(
        saveHotels(send_data)
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hoteladmin)
