import React,{Component} from 'react';
import {connect} from 'react-redux';
//Local Imports
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';

class viewDetails extends Component {
 constructor(props){
           super(props);
           this.state = { showModal: false, listingDetail:'' };
           this.close = this.close.bind(this);
           this.open = this.open.bind(this);
       }

 close() {
   this.setState({ showModal: false });

 }

 open() {
   let self = this;
   this.setState({ showModal: true },()=>{
   });

 }

 render() {
   let listingDetail = 'Loading...';
   switch (this.props.type) {
     case 'news':

     listingDetail =
         <div className="row">
           <div className="col-sm-4"><img src={this.props.imgsrc} style={{'width':'50%'}} /></div>
           <div className="col-sm-8">
             <p>{this.props.content}</p>
           </div>
         </div>;
       break;
       case 'banner':

       listingDetail =
           <div className="row container">
            <label>Title: </label>{this.props.title}
             <div className="col-sm-12"><img src={this.props.imgsrc} style={{'width':'50%'}} /></div>
           </div>;
         break;

     default:

   }
   return (
     <div>
        <Button
         bsStyle="primary"
         bsSize="small"
         onClick={this.open.bind(this)}
       >
         <span className="glyphicon glyphicon-edit"></span>
       </Button>

       <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
         <Modal.Header closeButton>
           <Modal.Title>Details</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {listingDetail}
           </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.close.bind(this)}>Close</Button>
         </Modal.Footer>
       </Modal>
     </div>
   );
 }
};

function mapStateToProps(state,props) {
  return{
    title:props.title,
    id:props.id
  }
}
function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(viewDetails);
