import C from '../actions/constants';


export const transports = (state=[],action)=>{
  if (action.type == C.FETCH_ALL_TRANSPORT) {
    return [
      action.payload
    ];
  }
  else {
    return state;
  }
}


export const hotelsbytransport = (state=[],action) =>{
  if(action.type == C.FETCH_HOTEL_BY_TRANSPORT){
    return action.payload;
  }
  else{
    return state;
  }
}