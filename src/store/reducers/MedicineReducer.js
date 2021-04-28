const initialState = {
    medicines: [],
    medicine: undefined,
    newMedicine: undefined
}
//Use the initialState as a default value 
export default function MedicineReducer(state = initialState, action) {
    //The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        //Different types of actions.
        case 'FETCH_ALL_MEDICINES_SUCCESS':
            return {
                ...state,
                medicines: action.medicines
            };
        case 'FETCH_MEDICINE_BY_ID_SUCCESS':
            return {
                ...state,
                medicine: action.payload
            };
        case 'CREATE_MEDICINE_SUCCESS':
            return {
                ...state,
                newMedicine: action.payload
            };
            case 'UPDATE_MEDICINE_SUCCESS':
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
