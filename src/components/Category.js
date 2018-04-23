import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {fetchAllCategories,deleteCategory} from '../actions/categoryactions';
import Categoryadmin from '../admin/components/Categoryadmin';
//import Banneradmin from '../admin/components/Banneradmin';
class Category extends Component {
    componentDidMount() {
      this.props.fetchAllCategories();
    }
    render() {
      let self = this;
      const cellEditProp = {
        mode: 'click',
        blurToSave: true,
        afterSaveCell: onAfterSaveCell  // a hook for after saving cell
      };
      function onAfterSaveCell(row, cellName, cellValue) {
            let send_data = {
              id:row.id,
              title:row.title,
              image_url:row.image_url,
              visible:row.visible=='Y'?'1':'0'
            };
            self.props.updateBanner(send_data);
      }
      let newsdetails = this.props.categories[0];
      
      function visibleFormat(cell,row){
        return (<span>{cell=='1'?'Y':'N'}</span>);
      }
      function deleteButton(cell, row){
        return <a href=""  onClick={(e)=>{
            e.preventDefault();
            self.props.deleteCategory(cell)
          }}><span className="glyphicon glyphicon-trash"></span></a>
      }
        return (
          <div className="container-fluid">

                 <div className="row">
                     <div className="col-lg-12">
                         <h3> <span className="glyphicon glyphicon-list"></span> Categories {this.props.saveStatus} </h3>
                         <hr/>
                     </div>
                 </div>
                 <div className="row">
                   <div className="col-md-12">
                         <br/>
                         <div className="panel panel-default" style={{"borderColor": "#3f51b5"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#3f51b5 !important","borderColor": "#3f51b5"}}>
                                 Manage Category Panel
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>

                               <Categoryadmin/>
                               <BootstrapTable data={newsdetails} cellEdit={ cellEditProp } striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="id"  isKey={true}  dataSort={true}>Id</TableHeaderColumn>
                                                <TableHeaderColumn dataField="CName"  dataSort={true}>Category Name</TableHeaderColumn> 
                                                <TableHeaderColumn dataField="id" dataFormat={deleteButton} >Delete</TableHeaderColumn>                                               
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
    categories:state.categoryall.categories
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchAllCategories(){
      dispatch(
        fetchAllCategories()
      )
    }
    ,
    deleteCategory(id){
      dispatch(
        deleteCategory(id)
      )
    }
  }
}
 export default connect(mapStateToProps,mapDispatchToProps)(Category);

 
