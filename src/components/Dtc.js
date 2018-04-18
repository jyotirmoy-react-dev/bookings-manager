import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Viewdetails from './viewDetails';
import {fetchDtcAll} from '../actions/dtcactions';
class Dtc extends Component {
    constructor(props){
    	super(props);
    	this.state = {};
    }
    componentWillMount() {
      this.props.fetchDtcAll();
    }
    render() {
      let dtcFiles = (this.props.dtcfiles)?this.props.dtcfiles[0]:[];
      function bdataFormater(cell,row){
        return <Viewdetails id={cell} type='dtc' />;
      }
        return (
          <div className="container-fluid">
                 <div className="row">
                   <div className="col-md-12">
                    <h3> <span className="glyphicon glyphicon-user"></span> BS EN 15092  </h3>
                         <hr/>
                         <div className="panel panel-default" style={{"borderColor": "#3f51b5"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#3f51b5 !important","borderColor": "#3f51b5"}}>
                                 Check BS EN 15092 Approvals
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>

                               <BootstrapTable data={dtcFiles} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="MANUFACTURER"  isKey={true}  dataSort={true}>Company</TableHeaderColumn>
                                                <TableHeaderColumn dataField="APPROVED_MIXING_VALVE"  dataSort={true}>Approved Valve</TableHeaderColumn>
                                                <TableHeaderColumn dataField="DESCRIPTION_PRODCERT"  dataSort={true} >Description</TableHeaderColumn>
                                                <TableHeaderColumn dataField="UNIQUE_ID"  dataSort={true} >Type</TableHeaderColumn>
                                                <TableHeaderColumn dataField="CERT_ID"  dataSort={true} >Certificate ID</TableHeaderColumn>
                                                <TableHeaderColumn dataField="CERTIFICATE_NUMBER"  dataSort={true} >Certificate Number</TableHeaderColumn>
                                                <TableHeaderColumn dataField="EXPIRY_DATE"  dataSort={true} >Expiry</TableHeaderColumn>
                                                <TableHeaderColumn dataField="EDIT"   dataSort={true} dataFormat={bdataFormater} >View Listing</TableHeaderColumn>
                              </BootstrapTable>

                             </div>

                         </div>

                     </div>
                   </div>
             </div>
        );
    }
}

function mapStateToProps(state) {
  return{
    dtcfiles:state.dtcall.dtcfiles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDtcAll(){
      dispatch(
        fetchDtcAll()
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dtc);
