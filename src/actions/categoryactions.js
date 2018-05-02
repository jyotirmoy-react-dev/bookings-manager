import axios from 'axios';
import C from './constants';
const baseUrl = "https://intense-bastion-97088.herokuapp.com/api";
if(window.sessionStorage.getItem('token')){
axios.defaults.params = {
                access_token: window
                    .sessionStorage
                    .getItem('token')
                }
}
//Thunk is Higher order Function
export const fetchAllCategories = ()=> (dispatch,getState)=>{
  dispatch({
    type:C.ADD_STATUS,
    payload:'...Loading....'
  });
  axios.get(baseUrl+'/category_masters')
  .then((value) => {
        dispatch({
          type:C.FETCH_ALL_CATEGORIES,
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


export const saveCategory = (send_data) => (dispatch,getState)=>{

  axios.post(baseUrl+'/category_masters',send_data)
  .then((value) => {
    dispatch(fetchAllCategories());
  })
  .catch((err) => {
    console.error(err);
  })
}

export const deleteCategory = (id)=>(dispatch,getState)=>{
  axios.delete(baseUrl+'/category_masters/'+id)
  .then((value) => {
    dispatch(fetchAllCategories());
  })
  .catch((err) => {
    console.error(err);
  })
};

export const getHotelsbyCategories = () => (dispatch,getState) => {
  axios.get(baseUrl+'/hotel_category_tables')
    .then(value => {
      dispatch({
        type:C.FETCH_HOTELS_BY_CATGORIES,
        payload:value.data
      });
    })
    .catch((err) => {
    console.error(err);
  })
}