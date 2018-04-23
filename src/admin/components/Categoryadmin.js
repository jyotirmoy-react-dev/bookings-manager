import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';

import axios from 'axios';
import moment from 'moment';
import {connect} from 'react-redux';
import {saveCategory} from '../../actions/categoryactions';

class Banneradmin extends Component {
    constructor(props){
      super(props);
      this.state = { showModal: false, categorydetails:{}};
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
      this.addCategoryUpdate = this.addCategoryUpdate.bind(this);
      this.saveCategory = this.saveCategory.bind(this);
    }
    close() {
      this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true});
    }
    addCategoryUpdate(e){
      let tempData = this.state.categorydetails;
      tempData[e.target.name] = e.target.value;
      this.setState({categorydetails:tempData});
    }
    saveCategory(e){
      e.preventDefault();
      let send_data=this.state.categorydetails;
      this.props.saveCategory(send_data);
      document.getElementById('bl_frm').reset();
    }

    render() {
        return (
            <div className="class-name">
              <button className="btn btn-primary" onClick={this.open.bind(this)}><span className="glyphicon glyphicon-plus"></span> Add Category</button>
            
            <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
              <Modal.Header closeButton>
                <Modal.Title>Add Banner</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{'width':'900px'}}>
              <div>
              <form id="bl_frm" action="" method="POST">
                  <table className="table table-bordered">
                  <tbody>
                            <tr>
                                <td colSpan="2"><b>Category Name</b></td>
                                <td colSpan="2"><input name="CName" type="text" onChange={this.addCategoryUpdate.bind(this)} className="form-control"  size="30" /></td>
                            </tr>                            
                        </tbody>
                    </table>
                    <input type="submit" onClick={this.saveCategory.bind(this)} className="btn btn-primary"  value="Add Category" />
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
    saveCategory(send_data){
      dispatch(
        saveCategory(send_data)
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Banneradmin)
