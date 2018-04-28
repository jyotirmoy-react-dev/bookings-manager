import C from '../actions/constants';

export const loginstat = (state={
    checkinglogin:false,
    loginchecked:false,
    authtoken: window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token'):false
},action)  => {
    switch (action.type) {
        case 'LOGIN_CHECK_ON':
            return {
                checkinglogin: true,
                loginchecked: false,
                authtoken: false
            }
            break;
        case 'LOGIN_SUCCESS':
            return {
                checkinglogin: false,
                loginchecked: true,
                authtoken: action.payload
            }
        break;
        case 'LOGIN_FAILED':
            return {
                checkinglogin: false,
                loginchecked: true,
                authtoken: false
            }
            break;
        case 'LOGOUT':
            return {
                checkinglogin: false,
                loginchecked: false,
                authtoken: false
            }
            break;
        default:
        return state;
            break;
    }
}