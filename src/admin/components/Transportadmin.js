import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';

import axios from 'axios';
import moment from 'moment';
import {connect} from 'react-redux';
import { saveTransport} from '../../actions/transportactions';

class Transportadmin extends Component {
    constructor(props){
      super(props);
      this.state = { showModal: false, transportDetails:{}};
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
      this.addTransportUpdate = this.addTransportUpdate.bind(this);
      this.saveTransport = this.saveTransport.bind(this);
    }
    close() {
      this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true});
    }
    addTransportUpdate(e){
      let tempData = this.state.transportDetails;
      tempData[e.target.name] = e.target.value;
      this.setState({transportDetails:tempData});
    }
    saveTransport(e){
      e.preventDefault();
      let send_data=this.state.transportDetails;
      this.props.saveTransport(send_data);
      document.getElementById('bl_frm').reset();
    }

    render() {
        return (
            <div className="class-name">
              <button className="btn btn-primary" onClick={this.open.bind(this)}><span className="glyphicon glyphicon-plus"></span> Add Transport</button>
            
            <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
              <Modal.Header closeButton>
                <Modal.Title>Add Transport</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{'width':'900px'}}>
              <div>
              <form id="bl_frm" action="" method="POST">
                  <table className="table table-bordered">
                  <tbody>
                            <tr>
                                <td colSpan="2"><b>Transport Name</b></td>
                          <td colSpan="2"><input name="TName" type="text" onChange={this.addTransportUpdate.bind(this)} className="form-control"  size="30" /></td>
                            </tr>                            
                        </tbody>
                    </table>
                    <input type="submit" onClick={this.saveTransport.bind(this)} className="btn btn-primary"  value="Add Transport" />
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
    saveTransport(send_data){
      dispatch(
        saveTransport(send_data)
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Transportadmin)
