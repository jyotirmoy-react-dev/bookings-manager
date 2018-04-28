import axios from 'axios';
import C from './constants';
import {addErrors} from './errorhandler';
const baseUrl = "http://localhost:3000/api";
if(window.sessionStorage.getItem('token')){
axios.defaults.params = {
                access_token: window
                    .sessionStorage
                    .getItem('token')
                }
}
export const fetchAllRoomtypes = () => (dispatch,getState)=>{
  axios.get(baseUrl +'/room_category_masters')
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
  axios.delete(baseUrl +'/room_category_masters'+'/'+id)
  .then((value) => {
    dispatch(fetchAllRoomtypes())
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
};

export const saveRoomtype = (send_data) => (dispatch,getState)=>{
  
  axios.post(baseUrl +'/room_category_masters',send_data)
  .then((value)=>{
    dispatch(fetchAllRoomtypes())
  })
  .catch((err)=>{
    dispatch(addErrors(err));
  })
};


export const getHotelByRoomType = (id) => (dispatch,getState) => {
  axios.get(baseUrl+'/hotel_masters/'+id+'/hotelRoomTariffTables')
  .then(value => {
    dispatch({
      type: C.FETCH_HOTEL_BY_ROOMTYPE,
      payload:value.data
    });
  })
}

export const addToRoomtype = (send_data) => (dispatch,getState) => {
  axios.post(baseUrl +'/hotel_room_tariff_tables',send_data)
  .then(value => {
    dispatch(getHotelByRoomType(send_data.HCode));
  })
  .catch(err => {
    dispatch(addErrors(err));
  })
}

export const deleteHotelByRoomType = (hotelid,roomid) => (dispatch,getState) => {
  axios.delete(baseUrl +`/hotel_masters/${hotelid}/hotelRoomTariffTables/${roomid}`)
  .then(value=>{
    dispatch(getHotelByRoomType(hotelid));
  })
  .catch(err=>{
    dispatch(addErrors(err));
  })
}

export const hetHotelsByRoomType = () => (dispatch,getState) => {
  axios.get(baseUrl +'/hotel_room_tariff_tables')
  .then(value => {
    dispatch({
      type:C.FETCH_ALL_HOTELS_BY_ROOMTYPE,
      payload:value.data
    });
  })
  .catch(err => {
    dispatch(addErrors(err));
  })
}