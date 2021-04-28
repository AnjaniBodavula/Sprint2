import { combineReducers } from 'redux';

import customerReducer from './CustomerReducer';
import medicineReducer from './MedicineReducer';
 import orderReducer from './OrderReducer';
 import  authReducer from './AuthReducer';
 import userReducer from './UserReducer';
import cartReducer from './CartReducer';

 
const rootReducer = combineReducers({
   
    authReducer,
   orderReducer,
   userReducer,
    customerReducer,
    medicineReducer,
    cartReducer

   

    
 
});
 
export default rootReducer;