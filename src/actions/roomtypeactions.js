import axios from 'axios';
import C from './constants';
import {addErrors} from './errorhandler';
const baseUrl = "http://localhost:3000/api/room_category_masters";

export const fetchAllRoomtypes = () => (dispatch,getState)=>{
  axios.get(baseUrl)
  .then((value) => {
    dispatch({
      type:C.FETCH_ROOMTYPES,
      payload:value.data
    })
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
};

export const deleteRoomtype = (id) => (dispatch,getState)=>{
  axios.delete(baseUrl+'/'+id)
  .then((value) => {
    dispatch(fetchAllRoomtypes())
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
};

export const saveRoomtype = (send_data) => (dispatch,getState)=>{
  
  axios.post(baseUrl,send_data)
  .then((value)=>{
    dispatch(fetchAllRoomtypes())
  })
  .catch((err)=>{
    dispatch(addErrors(err));
  })
};