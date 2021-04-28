const initialState = {
    customers: [],
    customer: undefined,
    newCustomer: undefined,
    medicines: [],
}
//Use the initialState as a default value 
export default function CustomerReducer(state = initialState, action) {
    //The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        //Different types of actions.
        case 'FETCH_ALL_CUSTOMERS_SUCCESS':
            return {
                ...state,
                customers: action.customers
            };
        case 'FETCH_CUSTOMER_BY_ID_SUCCESS':
            return {
                ...state,
                customer: action.payload
            };
        case 'CREATE_CUSTOMER_SUCCESS':
            return {
                ...state,
                newCustomer: action.payload
            };
        case 'UPDATE_CUSTOMER_SUCCESS':
            return {
                ...state,
                isUpdated: true
            };
        case 'DELETE_CUSTOMER_SUCCESS':
            return {
                ...state,
                customer: action.payload
            };

        default:
            /**
            *If this reducer doesnot recognize the action type,or doesn't
            *care about this specific action,return the existing state unchanged.
            */
            return state;

    }
}