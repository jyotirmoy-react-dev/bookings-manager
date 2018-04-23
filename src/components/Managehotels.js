import React,{Component} from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {fetchAllHotels,deleteHotels} from '../actions/hotelactions';
//import Newsadmin from '../admin/components/Newsadmin';
import Addtocategory from './addToCategory';
import Hotelsadmin from '../admin/components/Hotelsadmin';
import {fetchAllCategories,getHotelsbyCategories} from '../actions/categoryactions';
class Managehotels extends Component {
   constructor (props) {
     super(props)
      this.state = {
        filteredHotels: []
      };
   }
   
    componentDidMount() {
      this.props.fetchAllHotels();
      this.props.fetchAllCategories();
      this.props.getHotelsbyCategories();
    }
    filterByCategory(e){
      let filteredHotels = [];
      if(e.target.value!=''){        
      let filteredCategory = this.props.hotelcategories.filter(item => {
        return item.CCode == e.target.value;
      });
      this.props.hotels[0].filter(item => {
         filteredCategory.filter(item2 =>{
           if (item.id == item2.HCode) {
             filteredHotels.push(item);
           }
         });
      });
      console.log(filteredHotels);
      }
      else{
          filteredHotels = [];
      }
      this.setState({filteredHotels});
    }
    render() {
      let hoteldetails = [];
      hoteldetails = this.props.hotels[0];let self = this;
      let categoryList = this.props.categorylist[0]?this.props.categorylist[0]:[];
      if(this.state.filteredHotels.length>0){
        hoteldetails = this.state.filteredHotels;
      }
      function editSection (cell,row){
        return (<div style={{'display':'flex'}}>
          <Addtocategory popuptype="category" hname={row.HName} hotelid={row.id} />&nbsp;&nbsp;
           <Addtocategory popuptype="roomtype" hname={row.HName} hotelid={row.id} />&nbsp;&nbsp;
          <a href="" onClick={(e)=>{
            e.preventDefault();
            self.props.deleteHotels(cell)
          }}><span className="glyphicon glyphicon-trash"></span></a>
        </div>);
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

                               <Hotelsadmin/>
                               <div className="row">
                                <div className="col-lg-4">
                                <select className="form-control" onChange={this.filterByCategory.bind(this)}>
                                <option value="">Filter By Category</option>
                                {categoryList.map(item => {
                                  return <option key={item.id} value={item.CName}>{item.CName}</option>
                                })}
                                </select>
                                </div>
                                <div className="col-lg-4">
                                </div>
                                <div className="col-lg-4">
                                </div>
                               </div>
                               <hr/>
                               <BootstrapTable data={hoteldetails} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="id"  isKey={true}  dataSort={true}>Id</TableHeaderColumn>
                                                <TableHeaderColumn dataField="HName"  dataSort={true}>Hotel</TableHeaderColumn>
                                                <TableHeaderColumn dataField="HContact"  dataSort={true} >Contact</TableHeaderColumn>
                                                <TableHeaderColumn dataField="HPhone"   dataSort={true}  >Phone</TableHeaderColumn>
                                                <TableHeaderColumn dataField="HEmail"   dataSort={true}  >Email</TableHeaderColumn>
                                               <TableHeaderColumn dataField="id" dataSort={false} dataFormat={editSection}>Manage</TableHeaderColumn>
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
    saveStatus:state.saveStatus,
    categorylist:state.categoryall.categories,
    hotelcategories: state.categoryall.hotelcategories
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
    },
    fetchAllCategories(){
      dispatch(
        fetchAllCategories()
      );
    },
    getHotelsbyCategories(){
      dispatch(
        getHotelsbyCategories()
      );
    }
  }
}
 export default connect(mapStateToProps,mapDispatchToProps)(Managehotels);
