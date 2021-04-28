const initialState = {
    newUser: undefined
}
//Use the initialState as a default value 
export default function UserReducer(state = initialState, action) {
    //The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        //Action type.
        case 'CREATE_USER_SUCCESS':
            return {
                ...state,
                newUser: action.payload
            };
        default:
            /**
        *If this reducer doesnot recognize the action type,or doesn't
        *care about this specific action,return the existing state unchanged.
        */
            return state;

    }
}
