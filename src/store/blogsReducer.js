import C from '../actions/constants';

export const blogsall = (state=[],action)=>{
  if (action.type == C.FETCH_BLOGS_ALL) {
    return [
      action.payload
    ];
  }
  else{
    return state;
  }
}



export const blog = (state={},action)=>{
  if (action.type==C.FETCH_BLOG) {
    return action.payload;
  }
  else {
    return state;
  }
}
