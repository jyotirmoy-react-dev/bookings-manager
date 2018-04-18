import C from './constants';

export const addErrors = (error) =>{
  return {
    type:C.ADD_ERROR,
    payload:error
  }
}

export const clearerror = ()=>{
  return {
    type:C.CLEAR_ERROR
  }
}
