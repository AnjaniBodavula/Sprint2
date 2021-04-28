import Axios from 'axios';
 
// API URL
const apiUrl = 'http://localhost:8090';
 

export const createUserSuccess = (user) => {
    return {
        type: 'CREATE_USER_SUCCESS',
        payload: user
    }
};
 
export const createUser = (payload) => {
    let data = {
        
        customerId: payload.customerId,
        password:payload.password,
        role: "customer"
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/users/register", data)
            .then(response => {
                dispatch(createUserSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };

};