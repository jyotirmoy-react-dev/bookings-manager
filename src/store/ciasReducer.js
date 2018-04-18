import C from '../actions/constants';


export const ciasfiles = (state=[],action)=>{
  if (action.type==C.FETCH_CIAS_ALL) {
    return [
      ...state,
      action.payload
    ];
  }
  else {
    return state;
  }
}

export const ciasfile = (state={},action)=>{
  if (action.type==C.FETCH_CIAS_DETAIL) {
    return action.payload;
  }
  else {
    return state;
  }
}
