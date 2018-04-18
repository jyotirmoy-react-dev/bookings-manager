import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {fetchAllBlogs,deleteBlog} from '../actions/blogsactions';
import Blogsadmin from '../admin/components/Blogsadmin';
import Viewdetails from './viewDetails';
class Blogs extends Component {
    componentDidMount() {
      this.props.fetchAllBlogs();
    }
    render() {

      let blogsall = this.props.blogsall[0];let self = this;

      function viewBlog(cell, row){
        return <Viewdetails content={cell} imgurl={row.image_url}  type='blogs' />
        //return <span><img src={cell} style={{'width':'30%'}} /></span>;
      }
      function deleteButton(cell, row){
        return <button className="btn btn-primary" onClick={(e)=>{
            self.props.deleteBlog(cell)
          }}><span className="glyphicon glyphicon-trash"></span></button>
      }
        return (
          <div className="container-fluid">

                 <div className="row">
                     <div className="col-lg-12">
                         <h3> <span className="glyphicon glyphicon-user"></span> Treco Blogs  </h3>
                         <hr/>
                     </div>
                 </div>
                 <div className="row">
                   <div className="col-md-12">
                         <br/>
                         <div className="panel panel-default" style={{"borderColor": "#3f51b5"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#3f51b5 !important","borderColor": "#3f51b5"}}>
                                 Manage Blogs Panel
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>

                               <Blogsadmin />
                               <BootstrapTable data={blogsall} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="id"  isKey={true}  dataSort={true}>Id</TableHeaderColumn>
                                                <TableHeaderColumn dataField="title"  dataSort={true}>Title</TableHeaderColumn>
                                                <TableHeaderColumn dataField="visible"  dataSort={true} >Visible</TableHeaderColumn>
                                                <TableHeaderColumn dataField="content_blog"   dataSort={true} dataFormat={viewBlog} >View</TableHeaderColumn>
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
    blogsall:state.blogsdetails.blogsall
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchAllBlogs(){
      dispatch(
        fetchAllBlogs()
      )
    }
    ,
    deleteBlog(id){
      dispatch(
        deleteBlog(id)
      )
    }
  }
}
 export default connect(mapStateToProps,mapDispatchToProps)(Blogs);
