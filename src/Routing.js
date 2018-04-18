import {Router, Route,IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import {Provider} from  'mobx-react';

import App from './App';
import Home from './components/Home';
import Managehotels from './components/Managehotels';
import Banners from './components/Banners';
import Blogs from './components/Blogs';
import Cias from './components/Cias';
import Dtc from './components/Dtc';
import Login from './components/Login';
const   Routing = ()=>{
    return (
          <Router history={hashHistory}>
          <Route path={'/'} component={App}>
              <IndexRoute component={Home} />
              <Route path={'/managehotels'} component={Managehotels}></Route>
              <Route path={'/banners'} component={Banners}></Route>
              <Route path={'/blogs'} component={Blogs}></Route>
              <Route path={'/cias'} component={Cias}></Route>
              <Route path={'/dtc'} component={Dtc}></Route>
              <Route path={'/login'} component={Login}></Route>
          </Route>
          </Router>
    );
  }
export default Routing;
