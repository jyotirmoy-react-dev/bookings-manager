import axios from 'axios';
import {addErrors} from './errorhandler';
import C from './constants';


export const fetchciasAll = ()=> (dispatch,getState)=>{

  axios.get('https://wrcnsf.com/listings/php/ciasDetails.php?getciasfiles=get')
          .then((value) => {
            dispatch({
              type:C.FETCH_CIAS_ALL,
              payload:value.data
            })
          }).
          catch((err) => {
            dispatch(addErrors(err));
          });
}

export const fetchCiasDetails = (id)=>(dispatch,getState)=>{
  axios.get('https://wrcnsf.com/listings/php/ciasDetails.php?BUILD_APP_ID='+id)
          .then((value) => {
            dispatch({
              type:C.FETCH_CIAS_DETAIL,
              payload:value.data
            })
          }).
          catch((err) => {
            dispatch(addErrors(err));
          });
}

export const saveCiasDetails = (send_data)=>(dispatch,getState)=>{
  let params = new FormData();
  params.append("Manufacturer",send_data.Manufacturer);
  params.append("description",send_data.description);
  params.append("sizes",send_data.sizes);
  params.append("Certificate_Letters",send_data.Certificate_Letters);
  params.append("certnumber",send_data.certnumber);
  params.append("certdate",send_data.certdate);
  params.append("type_app","cias");
  params.append("setmethod","insert");
  axios.post('https://wrcnsf.com/listings/php/insertRecordClass.php',params)
  .then((value) => {
    dispatch({
      type:C.ADD_SAVE_STATUS,
      payload:value.data
    })
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
}
