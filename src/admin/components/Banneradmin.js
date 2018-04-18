import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';

import axios from 'axios';
import moment from 'moment';
import {connect} from 'react-redux';
import {saveBanner} from '../../actions/bannersaction';

class Banneradmin extends Component {
    constructor(props){
      super(props);
      this.state = { showModal: false, listingDetail:'',imageUrl:'',uploadStat:''};
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
    }
    close() {
      this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true ,imageUrl:'',uploadStat:''});
    }
    saveBanner(e){
      e.preventDefault();
      let send_data={
        'title':this.refs.title.value,
        'image_url':this.state.imageUrl,
        'visible':this.refs.visible.checked?"1":"0"
      };
      this.props.saveBanner(send_data);
      document.getElementById('bl_frm').reset();
    }

    uploadImage(e){
      let self = this;self.setState({'uploadStat':'uploading...'});
      if (e.target.files.length>0) {
        console.log(e.target.files[0]);
        const form = new FormData();
        form.append('file',e.target.files[0]);
        
        // axios.post('https://murmuring-sea-84221.herokuapp.com/api/tecoFileUploads/banner/upload',form)
        //   .then((value) => {
        //     console.log(value.data);

        //     self.setState({'uploadStat':'Done',imageUrl:'https://murmuring-sea-84221.herokuapp.com/api/tecoFileUploads/banner/download/'+value.data.result.files.file[0].name});
        //   })
        //   .catch((err) => {
        //     console.error(err);
        //   })
        self.setState({'uploadStat':'Done',imageUrl:'http://treco.in/web-admin/admin/images/blogs'+e.target.files[0].name});


      }
    }
    render() {
        return (
            <div className="class-name">
              <button className="btn btn-primary" onClick={this.open.bind(this)}><span className="glyphicon glyphicon-plus"></span> Add Banner</button>
            
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
                                <td colSpan="2"><b>Title</b></td>
                                <td colSpan="2"><input ref="title" type="text" className="form-control"  size="30" /></td>
                            </tr>
                            <tr>
                              <td>Image</td><td ><input type="file" id="img_file" ref='img_file' onChange={this.uploadImage.bind(this)} />
                              <br/>{this.state.uploadStat}
                                <br/>

                              <br/>

                              </td>
                              <td><img src={this.state.imageUrl} style={{'width':'45%'}} /> </td>
                            </tr>
                            <tr>
                              <td>Visible <input type="checkbox" ref="visible" /></td><td ></td>
                              <td> </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" onClick={this.saveBanner.bind(this)} className="btn btn-primary"  value="Add News" />
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
    saveBanner(send_data){
      dispatch(
        saveBanner(send_data)
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Banneradmin)
