import C from '../actions/constants';

export const banners = (state=[],action)=>{
  switch (action.type) {
    case C.FETCH_ALL_BANNERS:
      return [
        action.payload
      ]
      break;
    default:
      return state;
  }
}
