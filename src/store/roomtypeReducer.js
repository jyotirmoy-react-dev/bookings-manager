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
