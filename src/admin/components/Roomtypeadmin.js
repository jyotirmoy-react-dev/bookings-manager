import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';

import axios from 'axios';
import moment from 'moment';
import {connect} from 'react-redux';
import {saveRoomtype} from '../../actions/roomtypeactions';

class Roomtypeadmin extends Component {
    constructor(props){
    	super(props);
      this.state = { showModal: false, roomInfo:{}};
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
      this.updateRoomtype = this.updateRoomtype.bind(this);
    }
    close() {
      this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true});
    }
    updateRoomtype(e){
      let tempData = this.state.roomInfo;
      let inputName = e.target.name;
      let inputValue = e.target.value;
      tempData[inputName] = inputValue;
      this.setState({roomInfo:tempData});
    }
    saveRoomtype(e){
      e.preventDefault();
      let send_data = this.state.roomInfo;
      this.props.saveRoomtype(send_data);
    }

    uploadImage(e){
      let self = this;self.setState({'uploadStat':'uploading...'});
      if (e.target.files.length>0) {
        console.log(e.target.files[0]);
        const form = new FormData();
        form.append('file',e.target.files[0]);
        /*axios.post('https://murmuring-sea-84221.herokuapp.com/api/tecoFileUploads/banner/upload',form)
          .then((value) => {
            
          })
          .catch((err) => {
            console.error(err);
          })*/
          self.setState({'uploadStat':'Done',imageUrl:'http://treco.in/web-admin/admin/images/blogs'+e.target.files[0].name});

      }
    }
    render() {
        return (
            <div className="class-name">
            <button className="btn btn-primary" onClick={this.open.bind(this)}><span className="glyphicon glyphicon-plus"></span> Add Roomtype</button>

            <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
              <Modal.Header closeButton>
                <Modal.Title>Add Blog</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{'width':'900px'}}>
                                           
                 <table className="table table-bordered">
                  <tbody>
                            <tr>
                                <td colSpan="2"><b>RoomType Title</b></td>
                                <td colSpan="2"><input name="RName" type="text" onChange={this.updateRoomtype.bind(this)} className="form-control"  size="30" /></td>
                            </tr>
                           
                        </tbody>
                    </table>
                    <input type="submit" onClick={this.saveRoomtype.bind(this)} className="btn btn-primary"  value="Add Roomtype" />
              
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
    saveRoomtype(send_data){
      dispatch(
        saveRoomtype(send_data)
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Roomtypeadmin)
