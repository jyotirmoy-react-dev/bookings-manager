import C from '../actions/constants';

export const dtcfiles = (state=[],action)=>{
  switch (action.type) {
    case C.FETCH_DTC_ALL:
      return [
        ...state,
        action.payload
      ]
      break;
    default:
      return state;
  }
}

export const dtcfile = (state={},action)=>{
  if (action.type==C.FETCH_DTC_DETAIL) {
    return action.payload;
  }
  else {
    return state;
  }
}
