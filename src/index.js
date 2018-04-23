import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing';
import 'semantic-ui-css/semantic.min.css';
//import {observer,Provider,inject} from  'mobx-react';
//applying redux
import storeFactory from './store'
import {Provider} from 'react-redux';
let store = storeFactory();

/*
store.dispatch(
  fetchtmv2All()
);

store.dispatch(
  fetchtmv2Details('716')
);
*/

ReactDOM.render(<Provider store={store}>
  <Routing />
  </Provider>, document.getElementById('root'));
