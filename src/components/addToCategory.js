import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllCategories} from '../actions/categoryactions';
import {fetchAllRoomtypes } from '../actions/roomtypeactions';
//Local Imports
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';
import Categoryadd from './Categoryadd';
import Roomtypeadd from './Roomtypeadd';

class Addtocategory extends Component {
 constructor(props){
           super(props);
           this.state = { showModal: false, listingDetail:'' };
           this.close = this.close.bind(this);
           this.open = this.open.bind(this);
       }

 close() {
   this.setState({ showModal: false });
 }
 open(e) {
     e.preventDefault();
   let self = this;
   this.setState({ showModal: true },()=>{
     if (this.props.popuptype=='category') {
       this.props.fetchAllCategories();
     }
     else{
      this.props.fetchAllRoomtypes();
     }
   });
 }

 render() {
   let categories = this.props.categories[0] ? this.props.categories[0]: [];
   let roomtypes = this.props.roomtypes[0]? this.props.roomtypes[0]:[];
   return (
     <div>
        <a href=""
         onClick={this.open.bind(this)}
       >
         {this.props.popuptype=='category'?<span className="glyphicon glyphicon-tasks"></span>:<span className="glyphicon glyphicon-briefcase"></span>}
       </a>

       <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
         <Modal.Header closeButton>
           <Modal.Title>Add {this.props.hname} to  Category:</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {this.props.popuptype=='category'?
            <Categoryadd hotelid={this.props.hotelid} categories={categories} />
            :
            <Roomtypeadd hotelid={this.props.hotelid} roomtypes={roomtypes} />
            }
           </Modal.Body>
        
       </Modal>
     </div>
   );
 }
};

function mapStateToProps(state,props) {
  return{
    categories: state.categoryall.categories,
    roomtypes: state.roomtypesall.roomtypes
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchAllCategories(){
      dispatch(fetchAllCategories());
    },
    fetchAllRoomtypes(){
      dispatch(fetchAllRoomtypes());
    }

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Addtocategory);
