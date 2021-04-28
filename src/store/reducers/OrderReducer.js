const initialState = {
    orders: [],
    order: undefined

}
//Use the initialState as a default value 
export default function OrderReducer(state = initialState, action) {
    //The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        //Different types of actions.
        case 'FETCH_ALL_ORDERS_SUCCESS':
            return {
                ...state,
                orders: action.orders
            };
        case 'FETCH_ORDER_BY_ID_SUCCESS':
            return {
                ...state,
                order: action.payload
            };
        case 'FETCH_ORDER_BY_CUSTOMER_ID_SUCCESS':
            return {
                ...state,
                orders: action.payload
            };
         case 'UPDATE_ORDER_SUCCESS':
            return {
                ...state,
               isUpdated: true
                };
        default:
            /**
        *If this reducer doesnot recognize the action type,or doesn't
        *care about this specific action,return the existing state unchanged.
        */
            return state;

    }
}