import axios from 'axios';
import C from './constants';
const baseUrl = "https://treco-admin-backend-service.herokuapp.com/api";
//Thunk is Higher order Function
export const fetchAllBanners = ()=> (dispatch,getState)=>{
  dispatch({
    type:C.ADD_STATUS,
    payload:'...Loading....'
  });
  axios.get(baseUrl+'/banner_tables')
  .then((value) => {
        dispatch({
          type:C.FETCH_ALL_BANNERS,
          payload:value.data
        })
  }).then((value)=>{
    dispatch({
      type:C.CLEAR_STATUS
    })
  }).catch((err) => {
        console.log(err);
      });
}


export const saveBanner = (send_data) => (dispatch,getState)=>{

  axios.post(baseUrl+'/banner_tables',send_data)
  .then((value) => {
    dispatch(fetchAllBanners());
  })
  .catch((err) => {
    console.error(err);
  })
}

export const deleteBanner = (id)=>(dispatch,getState)=>{
  axios.delete(baseUrl+'/banner_tables/'+id)
  .then((value) => {
    dispatch(fetchAllBanners());
  })
  .catch((err) => {
    console.error(err);
  })
};

export const updateBanner = (send_data) => (dispatch,getState) =>{
  axios.put(baseUrl+'/banner_tables/'+send_data.id,send_data)
  .then((value)=>{
    dispatch(fetchAllBanners());
  })
  .catch((err)=>{
    console.log(err);
  })
}
