import {Router, Route,IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import {Provider} from  'mobx-react';

import App from './App';
import Home from './components/Home';
import Managehotels from './components/Managehotels';
import Category from './components/Category';
import Roomtype from './components/Roomtype';
import Transportation from './components/Transportation';
import Bookingstemplate from './components/Bookingstemplate';
const   Routing = ()=>{
    return (
          <Router history={hashHistory}>
          <Route path={'/'} component={App}>
              <IndexRoute component={Home} />
              <Route path={'/managehotels'} component={Managehotels}></Route>
              <Route path={'/managecategory'} component={Category}></Route>
              <Route path={'/manageroomtype'} component={Roomtype}></Route>
                <Route path={'/managetransport'} component={Transportation}></Route>
          <Route path={'/bookingstemplate/:hotelid'} component={Bookingstemplate}></Route>              
          </Route>
          </Router>
    );
  }
export default Routing;
