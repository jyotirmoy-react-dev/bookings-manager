import React, { Component } from 'react';
//import {observer,Provider,inject} from  'mobx-react';
import {connect} from 'react-redux';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import {logOut} from './actions/loginaction';
class App extends Component {
  render() {
    let self = this;
    return (
      
         <div>
{
  (this.props.loginobj.loginchecked == true && this.props.loginobj.authtoken != false) || (window.sessionStorage.getItem('token'))
    ? <div id="wrapper" className="toggled">
        <Sidebar/>
        <div id="page-content-wrapper">
        <button className="btn btn-primary pull-right" onClick={(e)=>{
          self.props.logOut();
        }}>Logout</button>
          {this.props.children}
        </div>
      </div>
    : <Login/>
}
         </div>
          
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
    loginobj : state.loginall.loginstat
});
function mapDispatchToProps(dispatch){
    return {
      logOut(){
        dispatch(logOut());
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)