import Axios from 'axios';
 
// API URL
const apiUrl = 'http://localhost:8090';
 
// Sync Action
export const fetchAllCustomersSuccess = (customers) => {
 
    return {
        type: 'FETCH_ALL_CUSTOMERS_SUCCESS',
        customers
    }
};
 
//Async Action
export const fetchAllCustomers = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/customer/getallcustomers')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllCustomersSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};


 export const fetchCustomerByIdSuccess = (customer) => {
    return {
        type: 'FETCH_CUSTOMER_BY_ID_SUCCESS',
        payload: customer
    }
};
 
export const fetchCustomerById = (customerId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/customer/getcustomer/' + customerId)
            .then(resp => {
                // Handle data with sync action
                dispatch(fetchCustomerByIdSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const createCustomerSuccess = (customer) => {
    return {
        type: 'CREATE_CUSTOMER_SUCCESS',
        payload: customer
    }
};
 
export const createCustomer = (payload) => {
    let data = {
        customerName: payload.customerName,
        address:payload.address,
        mobileNumber: payload.mobileNumber,
        emailId: payload.emailId,
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/customer/addcustomer", data)
            .then(response => {
                dispatch(createCustomerSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };

};

export const DeleteCustomerSuccess = (customers) => {
    return {
        type: 'DELETE_CUSTOMER_SUCCESS',
        payload: customers
    }
};
 
export const deleteCustomer = (customerId) => {
    return (dispatch) => {
        return Axios.delete(apiUrl + '/customer/deletecustomer/' + customerId)
            .then(resp => {
                // Handle data with sync action
                dispatch(DeleteCustomerSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};


export const updateCustomerSuccess = (customer) => {
    return {
        type: 'UPDATE_CUSTOMER_SUCCESS',
        payload: customer
    }
};
 
export const updateCustomer = (payload) => {
    console.log(payload);
    let data = {
        
        customerName: payload.customerName,
        customerPassword:payload.customerPassword,
        mobileNumber: payload.mobileNumber,
        emailId: payload.emailId,
    
    }
    return (dispatch) => {
        return Axios.put(apiUrl + "/customer/updatecustomer/"+payload.customerId,data)
            .then(response => {
                dispatch(updateCustomerSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };

};

