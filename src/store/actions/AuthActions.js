import Axios from 'axios';
 
// API URL
const apiUrl = 'http://localhost:8090';
 
export const loginSuccess = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: user
    }
};
 
export const loginFailure = () => {
    return {
        type: 'LOGIN_FAILURE'
    }
};
 
export const doLogin = (payload) => {
    let data = {
customerId: payload.username,
password: payload.password
}   
return (dispatch) => {
return Axios.post(apiUrl + "/users/signIn", data)
    .then(response => {
        dispatch(loginSuccess(response.data))
    })
    .catch(error => {
        ////console.log(error);
        //throw (error);
        dispatch(loginFailure());
    });
};

};
export const logout = () => {
	return {
		type: 'LOGOUT'
	}
};
