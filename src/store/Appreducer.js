import C from '../actions/constants';
import {combineReducers} from 'redux';
import {categories,hotelcategories} from './categoryReducer';
import { roomtypes, hotelbyroomtype, hotelsByRoomType} from './roomtypeReducer';
import {dtcfiles,dtcfile} from './dtcreducer';
import { transports, hotelsbytransport} from './transportReducer';
import {loginstat} from './Loginreducer';
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



export const hotelbycategory = (state=[],action)=>{
  switch (action.type) {
    case C.FETCH_HOTEL_BY_CATEGORY:
      return action.payload;
      break;  
    default:
    return state;
      break;
  }
}


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

export const hotelDetails = (state={},action) => {
  if (action.type == C.FETCH_HOTEL_DETAILS) {
    return action.payload;
  }
  else {
    return state;
  }
}
export default combineReducers({
  hotelsall:combineReducers({
    hotels,
    hotelbycategory,
    hotelDetails
  }),
  categoryall:combineReducers({
    categories,
    hotelcategories
  }),
  dtcall:combineReducers({
    dtcfiles,
    dtcfile
  }),
  roomtypesall:combineReducers({
    roomtypes,
    hotelbyroomtype,
    hotelsByRoomType
  }),
  transportall: combineReducers({
    transports,
    hotelsbytransport
  }),
  error,
  saveStatus,
  loginall:combineReducers({
    loginstat
  }),
})
