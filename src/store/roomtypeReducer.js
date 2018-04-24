import C from '../actions/constants';

export const roomtypes = (state=[],action)=>{
if (action.type == C.FETCH_ROOMTYPES) {
    return [
      action.payload
    ];
  }
  else{
    return state;
  }
}


export const hotelbyroomtype = (state=[],action)=>{
  if (action.type == C.FETCH_HOTEL_BY_ROOMTYPE) {
    return action.payload;
  }
  else{
    return state;
  }
}

export const hotelsByRoomType = (state=[],action)=>{
  if(action.type == C.FETCH_ALL_HOTELS_BY_ROOMTYPE){
    return action.payload;
  }
  else{
    return state;
  }
}