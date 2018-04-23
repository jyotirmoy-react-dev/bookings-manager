import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {fetchAllRoomtypes,deleteRoomtype} from '../actions/roomtypeactions';
import Roomtypeadmin from '../admin/components/Roomtypeadmin';
class Roomtype extends Component {
    componentDidMount() {
      this.props.fetchAllRoomtypes();
    }
    render() {

      let roomtypes = this.props.roomtypes[0];let self = this;

      
      function deleteButton(cell, row){
        return <a href="" onClick={(e)=>{
            e.preventDefault();
            self.props.deleteRoomtype(cell)
          }}><span className="glyphicon glyphicon-trash"></span></a>
      }
        return (
          <div className="container-fluid">

                 <div className="row">
                     <div className="col-lg-12">
                         <h3> <span className="glyphicon glyphicon-list"></span> Manage Roomtypes  </h3>
                         <hr/>
                     </div>
                 </div>
                 <div className="row">
                   <div className="col-md-12">
                         <br/>
                         <div className="panel panel-default" style={{"borderColor": "#3f51b5"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#3f51b5 !important","borderColor": "#3f51b5"}}>
                                 Manage Room Types Panel
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>

                               <Roomtypeadmin />
                               <BootstrapTable data={roomtypes} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="id"  isKey={true}  dataSort={true}>Id</TableHeaderColumn>
                                                <TableHeaderColumn dataField="RName"  dataSort={true}>RoomType</TableHeaderColumn>                                                
                                              <TableHeaderColumn dataField="id"   dataSort={true} dataFormat={deleteButton} >Delete</TableHeaderColumn>
                              </BootstrapTable>

                             </div>

                         </div>

                     </div></div>

         </div>
        );
    }
}

function mapStateToProps(state) {
  return{
roomtypes : state.roomtypesall.roomtypes
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchAllRoomtypes(){
      dispatch(
        fetchAllRoomtypes()
      )
    }
    ,
    deleteRoomtype(id){
      dispatch(
        deleteRoomtype(id)
      )
    }
  }
}
 export default connect(mapStateToProps,mapDispatchToProps)(Roomtype);
