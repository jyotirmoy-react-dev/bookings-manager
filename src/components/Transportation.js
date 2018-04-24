import React,{Component} from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Transportadmin from '../admin/components/Transportadmin';
import { fetAllTransports, deleteTransport} from '../actions/transportactions';

class Transportation extends Component {
    constructor(props){
    	super(props);
    	this.state = {};
    }
    componentWillMount() {
      this.props.fetAllTransports();
    }
  deleteTransport(id){
    this.props.deleteTransport(id);
  }
    render() {
      let transports = (this.props.transports[0]) ? this.props.transports[0]:[];let self = this;
      function bdataFormater(cell,row){
        return <a href="" onClick={(e)=>{
          e.preventDefault();
          self.deleteTransport(cell);
        }}><span className="glyphicon glyphicon-trash"></span></a>;
      }
        return (
          <div className="container-fluid">
                 <div className="row">
                   <div className="col-md-12">
                    <h3> <span className="glyphicon glyphicon-list"></span> Transportations  </h3>
                         <hr/>
                         <div className="panel panel-default" style={{"borderColor": "#3f51b5"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#3f51b5 !important","borderColor": "#3f51b5"}}>
                                 Manage Transportation
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>
                            <Transportadmin />
                               <BootstrapTable data={transports} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="id"  isKey={true}  dataSort={true}>ID</TableHeaderColumn>
                                                <TableHeaderColumn dataField="TName"  dataSort={true} >Transport</TableHeaderColumn>                                                
                                                <TableHeaderColumn dataField="id"   dataSort={true} dataFormat={bdataFormater} >Delete</TableHeaderColumn>
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
    transports:state.transportall.transports
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetAllTransports(){
      dispatch(
        fetAllTransports()
      )
    },
    deleteTransport(id){
      dispatch(
        deleteTransport(id)
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Transportation);
