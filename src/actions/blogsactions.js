import axios from 'axios';
import C from './constants';
import {addErrors} from './errorhandler';
const baseUrl = "https://treco-admin-backend-service.herokuapp.com/api/blogs_tables";

export const fetchAllBlogs = () => (dispatch,getState)=>{
  axios.get(baseUrl)
  .then((value) => {
    dispatch({
      type:C.FETCH_BLOGS_ALL,
      payload:value.data
    })
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
};

export const deleteBlog = (id) => (dispatch,getState)=>{
  axios.delete(baseUrl+'/'+id)
  .then((value) => {
    dispatch(fetchAllBlogs())
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
};

export const saveblogs = (send_data) => (dispatch,getState)=>{
  
  axios.post(baseUrl,send_data)
  .then((value)=>{
    dispatch(fetchAllBlogs())
  })
  .catch((err)=>{
    dispatch(addErrors(err));
  })
};