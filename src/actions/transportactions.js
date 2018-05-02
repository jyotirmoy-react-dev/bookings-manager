import axios from 'axios';
import {addErrors} from './errorhandler';
import C from './constants';
const baseUrl = "https://intense-bastion-97088.herokuapp.com/api";
if(window.sessionStorage.getItem('token')){
axios.defaults.params = {
                access_token: window
                    .sessionStorage
                    .getItem('token')
                }
}
export const fetAllTransports = () => (dispatch,getState) => {
  axios.get(baseUrl +'/transport_masters')
  .then(value => {
    dispatch({
      type: C.FETCH_ALL_TRANSPORT,
      payload: value.data
    });
  })
  .catch(err => {
    dispatch(addErrors(err));
  })
}

export const saveTransport = (send_data) => (dispatch,getState) => {
  axios.post(baseUrl + '/transport_masters',send_data)
  .then(value=>{
    dispatch(fetAllTransports());
  })
    .catch(err => {
      dispatch(addErrors(err));
    })
}

export const deleteTransport = (id) => (dispatch, getState) => {
  axios.delete(baseUrl + '/transport_masters/' + id)
  .then(value => {
    dispatch(fetAllTransports());
    }).catch(err => {
      dispatch(addErrors(err));
    })

}

export const addHotelToTransport = (send_data) => (dispatch,getState) => {
  axios.post(baseUrl +'/hotel_transport_tariffs',send_data)
  .then(value => {
    dispatch(getHotelByTransports(send_data.HCode));
    }).catch(err => {
      dispatch(addErrors(err));
    })


}

export const getHotelByTransports = (id) => (dispatch,getState) => {
  axios.get(baseUrl +`/hotel_masters/${id}/hotelTransportTariffs`)
  .then(value=>{
    dispatch({
      type: C.FETCH_HOTEL_BY_TRANSPORT,
      payload:value.data
    })
    }).catch(err => {
      dispatch(addErrors(err));
    })
}

export const deleteHotelTrasnport = (hotelid,transid) => (dispatch,getState) =>{
  axios.delete(baseUrl +`/hotel_masters/${hotelid}/hotelTransportTariffs/${transid}`)
    .then(value => {
      dispatch(getHotelByTransports(hotelid));
    }).catch(err => {
      dispatch(addErrors(err));
    })
}