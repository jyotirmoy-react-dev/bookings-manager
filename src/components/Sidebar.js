import React,{Component} from 'react';

export default class Sidebar extends Component {

    render() {
        return (
          <div id="sidebar-wrapper" style={{"background": "#3f51b5"}}>
             <ul className="sidebar-nav">
                 <li className="sidebar-brand" style={{"color": "#fff"}} className="active">
                     <a href="#/" style={{"color": "#fff"}} >
                         <span className="glyphicon glyphicon glyphicon-dashboard"></span>   Bookings Manager
                     </a>
                 </li>
                 <li>
                     <a href="#/managehotels">
                     <span className="glyphicon glyphicon-pencil"></span>   Manage Hotels</a>
                 </li>
                 <li>
                 <a href="#/managecategory"><span className="glyphicon glyphicon-pencil"></span>  Manage Category</a>
                 </li>
                 <li>
                 <a href="#/manageroomtype"><span className="glyphicon glyphicon-pencil"></span>  Manage Roomtype</a>
                 </li>
                 <li>
                 <a href="#/managetransport"><span className="glyphicon glyphicon-pencil"></span>  Manage Transportation</a>
                 </li>                
             </ul>
         </div>
        );
    }
}
