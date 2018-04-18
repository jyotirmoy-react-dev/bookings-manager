import C from './constants';
import axios from 'axios';
import {addErrors} from './errorhandler';

export const fetchDtcAll = ()=>(dispatch,getState)=>{
  axios.get('https://wrcnsf.com/listings/php/dtcDetails.php?getdtcfiles=get')
  .then((value) => {
    dispatch({
      type:C.FETCH_DTC_ALL,
      payload:value.data
    });
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
}

export const fetchDtcDetails = (id)=>(dispatch,getState)=>{
  axios.get('https://wrcnsf.com/listings/php/dtcDetails.php?BUILD_APP_ID='+id)
  .then((value) => {
    dispatch({
      type:C.FETCH_DTC_DETAIL,
      payload:value.data
    });
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
}
