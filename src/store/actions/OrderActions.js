import Axios from 'axios';
// API URL
const apiUrl = 'http://localhost:8090';
// Sync Action
export const fetchAllOrdersSuccess = (orders) => {
    
    return {
        type: 'FETCH_ALL_ORDERS_SUCCESS',
        orders
    }
};
//Async Action
export const fetchAllOrders = () => {
    
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return dispatch => {
        // Returns a promise
        return Axios.get(apiUrl + '/orders/getallorders')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllOrdersSuccess(resp.data))
            })
            .catch(error => {
                console.log(error);
                throw (error);
            });
    };
};
export const fetchOrderByIdSuccess = (order) => {
    return {
        type: 'FETCH_ORDER_BY_ID_SUCCESS',
        payload: order
    }
};
export const fetchOrderById = (orderId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/orders/getorder/' + orderId)
            .then(resp => {
                // Handle data with sync action
                dispatch(fetchOrderByIdSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const createOrderSuccess = (order) => {
    return {
        type: 'CREATE_ORDER_SUCCESS',
        payload: order
    }
};
export const createOrder = (payload) => {
    let data = {
        // orderId: payload.orderId,
        // orderDate: payload.orderDate,
        // dispatchDate: payload.dispatchDate,
        // totalCost: payload.totalCost,
        // status: payload.status,
        customerId: payload.customerId,
        medicineList: payload.medicineList
    
    }
    console.log(data);
    return (dispatch) => {
        return Axios.post(apiUrl + "/orders/addorder", data)
            .then(response => {
                dispatch(createOrderSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};



export const fetchOrderByCustomerIdSuccess = (orders) => {
    return {
        type: 'FETCH_ORDER_BY_CUSTOMER_ID_SUCCESS',
        payload: orders
    }
};
 
export const fetchOrderByCustomerId = (customerId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/orders/getorderbycustomerid/' + customerId)
            .then(resp => {
                // Handle data with sync action
                dispatch(fetchOrderByCustomerIdSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const updateOrderSuccess = (order) => {
    return {
        type: 'UPDATE_ORDER_SUCCESS',
        payload: order
    }
};
 
export const updateOrder = (payload) => {
    console.log(payload);
    let data = {
        orderId:payload.orderId,
        dispatchDate: payload.dispatchDate,
        orderDate: payload.orderDate,
        status: payload.status,
        totalCost:payload.totalCost,
        customerId:payload.customerId,
        medicineList:payload.medicineList
        

    
    }
    return (dispatch) => {
        return Axios.put(apiUrl + "/orders/updateorder/"+payload.orderId,data)
            .then(response => {
                dispatch(updateOrderSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };

};