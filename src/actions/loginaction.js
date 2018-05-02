import C from './constants';
import axios from 'axios';
import {addErrors} from './errorhandler';
const baseUrl = "https://intense-bastion-97088.herokuapp.com/api";


export const loginCheck =(send_data)=>(dispatch,getState)=>{
    dispatch({
        type:C.LOGIN_CHECK_ON
    });
    axios.post(baseUrl+'/Users/login',send_data)
    .then(res=>{
        if (res.status == 200 ) {
            window.sessionStorage.removeItem('token');
             window.sessionStorage.clear();
            window.sessionStorage.setItem('token',res.data.id);
            axios.defaults.params = {
                access_token: window
                    .sessionStorage
                    .getItem('token')
                }
            dispatch({
                type:C.LOGIN_SUCCESS,
                payload:res.data.id
            });
        }
        else{
            dispatch({
                type:C.LOGIN_FAILED
            })
        }
    })
    .catch(err=>{
        dispatch(addErrors(err));
    })
} 

export const logOut = () => (dispatch,getState)=>{
    axios.post(baseUrl+'/Users/logout')
    .then(res => {
        window.sessionStorage.removeItem('token');
        window.sessionStorage.clear();
        dispatch({
            type:C.LOGOUT
        })
    })
}