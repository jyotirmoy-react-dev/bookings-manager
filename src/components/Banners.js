import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {fetchAllBanners,deleteBanner,updateBanner} from '../actions/bannersaction';
import Banneradmin from '../admin/components/Banneradmin';
import Viewdetails from './viewDetails';
class Banners extends Component {
    componentDidMount() {
      this.props.fetchAllBanners();
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
      let newsdetails = this.props.banners[0];
      function imageView(cell, row){
        return <Viewdetails imgsrc={cell} title={row.title} id={row.id}  type='banner' />
        //return <span><img src={cell} style={{'width':'30%'}} /></span>;
      }
      function visibleFormat(cell,row){
        return (<span>{cell=='1'?'Y':'N'}</span>);
      }
      function deleteButton(cell, row){
        return <button className="btn btn-primary" onClick={(e)=>{
            self.props.deleteBanner(cell)
          }}><span className="glyphicon glyphicon-trash"></span></button>
      }
        return (
          <div className="container-fluid">

                 <div className="row">
                     <div className="col-lg-12">
                         <h3> <span className="glyphicon glyphicon-user"></span> Treco Banners {this.props.saveStatus} </h3>
                         <hr/>
                     </div>
                 </div>
                 <div className="row">
                   <div className="col-md-12">
                         <br/>
                         <div className="panel panel-default" style={{"borderColor": "#3f51b5"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#3f51b5 !important","borderColor": "#3f51b5"}}>
                                 Manage Banners Panel
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>

                               <Banneradmin />
                               <BootstrapTable data={newsdetails} cellEdit={ cellEditProp } striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="id"  isKey={true}  dataSort={true}>Id</TableHeaderColumn>
                                                <TableHeaderColumn dataField="title"  dataSort={true}>Title</TableHeaderColumn>
                                                <TableHeaderColumn dataField="visible"  dataSort={true} dataFormat={visibleFormat} editable={ { type: 'checkbox', options: { values: 'Y:N' } } } >Visible</TableHeaderColumn>
                                                <TableHeaderColumn dataField="image_url"   dataSort={true} editable={ false } dataFormat={imageView} >View Image</TableHeaderColumn>
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
    banners:state.bannerall.banners,
    saveStatus:state.saveStatus
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchAllBanners(){
      dispatch(
        fetchAllBanners()
      )
    }
    ,
    deleteBanner(id){
      dispatch(
        deleteBanner(id)
      )
    },
    updateBanner(send_data){
      dispatch(updateBanner(send_data));
    }
  }
}
 export default connect(mapStateToProps,mapDispatchToProps)(Banners);

 
