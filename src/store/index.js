import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
//Local Imports
import C from '../actions/constants';
import appreducer from './Appreducer';

const listingConsoleMessages =  store => next => action => {
  console.log(`
      Dispatched ${action.type}
      Original State
      ==============

    `);
  let result = next(action);
  console.log(`
    New state
    =========
    
    `);

  return result;
}

export default (initialstate={})=>{
  return applyMiddleware(thunk,listingConsoleMessages)(createStore)(appreducer,initialstate);
}
