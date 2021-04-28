const initialState = {
    currentUser: undefined,
    isAuthUser: undefined,
    isLoggedOut: false
}
//Use the initialState as a default value 
export default function AuthReducer(state = initialState, action) {
    //The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        //Different types of actions.
        case 'LOGIN_SUCCESS':
            let loggedInUser = { name: action.payload.customerId, role: action.payload.role };
            localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
            return {
                ...state,
                user: action.payload,
                isAuthUser: true
            };
        case 'LOGIN_FAILURE':
            localStorage.removeItem("currentUser");
            return {
                ...state,
                isAuthUser: false
            };
        case 'LOGOUT':
            localStorage.removeItem("currentUser");
            return {
                ...state,
                isLoggedOut: true,
                currentUser: undefined,
                isAuthUser: undefined
            };

        default:
            /**
            *If this reducer doesnot recognize the action type,or doesn't
            *care about this specific action,return the existing state unchanged.
            */
            return state;
    }
}