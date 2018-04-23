import C from '../actions/constants';

export const categories = (state=[],action)=>{
  switch (action.type) {
    case C.FETCH_ALL_CATEGORIES:
      return [
        action.payload
      ]
      break;
    default:
      return state;
  }
}

export const hotelcategories = (state=[],action)=>{
  switch(action.type){
    case C.FETCH_HOTELS_BY_CATGORIES:
    return action.payload;
    break;
    default:
    return state;
    
  }
}