import {Router, Route,IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import {Provider} from  'mobx-react';

import App from './App';
import Home from './components/Home';
import Managehotels from './components/Managehotels';
import Category from './components/Category';
import Roomtype from './components/Roomtype';
import Cias from './components/Cias';
const   Routing = ()=>{
    return (
          <Router history={hashHistory}>
          <Route path={'/'} component={App}>
              <IndexRoute component={Home} />
              <Route path={'/managehotels'} component={Managehotels}></Route>
              <Route path={'/managecategory'} component={Category}></Route>
              <Route path={'/manageroomtype'} component={Roomtype}></Route>
              <Route path={'/cias'} component={Cias}></Route>              
          </Route>
          </Router>
    );
  }
export default Routing;
