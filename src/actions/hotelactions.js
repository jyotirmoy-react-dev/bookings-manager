import axios from 'axios';
import C from './constants';
const baseUrl = "http://localhost:3000/api";
//Thunk is Higher order Function
export const fetchAllHotels = ()=> (dispatch,getState)=>{
  dispatch({
    type:C.ADD_STATUS,
    payload:'...Loading....'
  });
  axios.get(baseUrl+'/hotel_masters')
  .then((value) => {
        dispatch({
          type:C.FETCH_ALL_HOTELS,
          payload:value.data
        })
      })
  .then((value)=>{
    dispatch({
      type:C.CLEAR_STATUS
    })
  })
  .catch((err) => {
        console.log(err);
      });
}

export const saveHotels = (send_data) => (dispatch,getState)=>{
   dispatch({
    type:C.ADD_STATUS,
    payload:'...Loading....'
  });
  let params = {
  "title": send_data.title,
  "content": send_data.content,
  "image_url": send_data.image_url,
  "visible": send_data.visible,
  "date_news": send_data.date_news
  };
  axios.post(baseUrl+'/news_tables',params)
  .then((value) => {
    dispatch(fetchAllHotels());
  })
  .then((value)=>{
    dispatch({
      type:C.CLEAR_STATUS
    })
  })
  .catch((err) => {
    console.error(err);
  })
}

export const deleteHotels = (id)=>(dispatch,getState)=>{
  axios.delete(baseUrl+'/news_tables/'+id)
  .then((value) => {
    dispatch(fetchAllHotels());
  })
  .catch((err) => {
    console.error(err);
  })
}
