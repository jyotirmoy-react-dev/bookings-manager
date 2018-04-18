import C from '../actions/constants';
import {combineReducers} from 'redux';
import {banners} from './bannerReducer';
import {ciasfiles,ciasfile} from './ciasReducer';
import {blogsall,blog} from './blogsReducer';
import {dtcfiles,dtcfile} from './dtcreducer';

export const hotels = (state=[],action)=>{
  switch (action.type) {
    case C.FETCH_ALL_HOTELS:
      return [
        action.payload
      ];
      break;
    default:
    return state;
  }
};






export const error = (state=[],action)=>{
  switch (action.type) {
    case C.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]
      break;
    case C.CLEAR_ERROR:
      return [];
      break;
    default:
    return state;

  }
}

export const saveStatus = (state='',action)=>{
  switch (action.type) {
    case C.ADD_STATUS:
      return action.payload;
      break;
    case C.CLEAR_STATUS:
      return '';
      break;  
    default:
    return state;

  }
}

export default combineReducers({
  hotelsall:combineReducers({
    hotels
  }),
  bannerall:combineReducers({
    banners
  }),
  ciasall:combineReducers({
    ciasfiles,
    ciasfile
  }),
  dtcall:combineReducers({
    dtcfiles,
    dtcfile
  }),
  blogsdetails:combineReducers({
    blogsall,
    blog
  }),
  error,
  saveStatus,
})
