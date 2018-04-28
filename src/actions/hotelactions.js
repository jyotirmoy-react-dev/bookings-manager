import axios from 'axios';
import C from './constants';
const baseUrl = "http://localhost:3000/api";
if(window.sessionStorage.getItem('token')){
axios.defaults.params = {
                access_token: window
                    .sessionStorage
                    .getItem('token')
                }
}
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
  
  axios.post(baseUrl+'/hotel_masters',send_data)
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
  axios.delete(baseUrl+'/hotel_masters/'+id)
  .then((value) => {
    dispatch(fetchAllHotels());
  })
  .catch((err) => {
    console.error(err);
  })
}


export const getHotelCategoryList = (id) => (dispatch,getState) => {
  axios.get(baseUrl+'/hotel_masters/'+id+'/hotelCategoryTables')
  .then(res=>{
    dispatch({
      type: C.FETCH_HOTEL_BY_CATEGORY,
      payload: res.data
    });
  })
  .catch(err => {
    console.error(err);
  })
}

export const SavehotelCategory = (send_data,id) => (dispatch,getState) =>{
  axios.post(baseUrl+'/hotel_category_tables',send_data)
  .then(res => {
    dispatch(getHotelCategoryList(id));
  })
  .catch(err => {
    console.log(err);
  })
}

export const deleteCategory = (HCode,fk) => (dispatch,getState) => {
  axios.delete(baseUrl+'/hotel_masters/'+HCode+'/hotelCategoryTables/'+fk)
  .then(res=>{
    dispatch(getHotelCategoryList(HCode));
  })
.catch(err => {
  console.log(err);
})
}

export const getHotelDetails = (id) => (dispatch,getState) => {
  axios.get(baseUrl +`/hotel_masters/${id}`)
  .then(value => {
    dispatch({
      type: C.FETCH_HOTEL_DETAILS,
      payload:value.data
    });
    }).catch(err => {
      console.log(err);
    })
}