import React,{Component} from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {fetchAllHotels,deleteHotels} from '../actions/hotelactions';
//import Newsadmin from '../admin/components/Newsadmin';
import Viewdetails from './viewDetails';
class Managehotels extends Component {
    componentDidMount() {
      this.props.fetchAllHotels();
    }
    render() {

      let hoteldetails = this.props.hotels[0];let self = this;
      function imageView(cell, row){
        return <Viewdetails imgsrc={cell} content={row.content} type='news' />
        //return <span><img src={cell} style={{'width':'30%'}} /></span>;
      }
      function deleteButton(cell, row){
        return <button className="btn btn-primary" onClick={(e)=>{
            self.props.deleteHotels(cell)
          }}><span className="glyphicon glyphicon-trash"></span></button>
      }
        return (
          <div className="container-fluid">

                 <div className="row">
                     <div className="col-lg-12">
                         <h3> <span className="glyphicon glyphicon-list"></span> Hotels  {this.props.saveStatus}</h3>
                         <hr/>
                     </div>
                 </div>
                 <div className="row">
                   <div className="col-md-12">
                         <br/>
                         <div className="panel panel-default" style={{"borderColor": "#3f51b5"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#3f51b5 !important","borderColor": "#3f51b5"}}>
                                 Manage Hotels
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>

                               
                               <BootstrapTable data={hoteldetails} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="id"  isKey={true}  dataSort={true}>Id</TableHeaderColumn>
                                                <TableHeaderColumn dataField="HName"  dataSort={true}>Hotel</TableHeaderColumn>
                                                <TableHeaderColumn dataField="HContact"  dataSort={true} >Contact</TableHeaderColumn>
                                                <TableHeaderColumn dataField="HPhone"   dataSort={true} dataFormat={imageView} >Phone</TableHeaderColumn>
                                                <TableHeaderColumn dataField="HEmail"   dataSort={true} dataFormat={deleteButton} >Email</TableHeaderColumn>
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
    hotels:state.hotelsall.hotels,
    saveStatus:state.saveStatus
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchAllHotels(){
      dispatch(
        fetchAllHotels()
      )
    }
    ,
    deleteHotels(id){
      dispatch(
        deleteHotels(id)
      )
    }
  }
}
 export default connect(mapStateToProps,mapDispatchToProps)(Managehotels);
