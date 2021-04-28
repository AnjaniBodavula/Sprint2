const initialState = {
    cart: []
};
//Use the initialState as a default value 
const CartReducer = (state = initialState, action) => {

    let cart = state.cart;
    //The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        //Action type.
        case 'ADD_TO_CART':

            cart.push(action.payload);

            return {
                ...state,
                cart: cart
            };
        //   case 'UPDATE_CART_QUANTITY':

        //       let medicine = cart.find(medicine => item.medicine.medicineId == action.payload.medicineId);

        //       let newCart = cart.filter(medicine => item.medicine.medicineId != action.payload.medicineId);

        //       item.quantity = action.payload.quantity;

        //       newCart.push(item);

        //       return {
        //           ...state,
        //           cart: newCart
        //       };

        //   case 'REMOVE_FROM_CART':
        //       return {
        //           ...state,
        //           cart: cart.filter(item => item.product.medicineId != action.payload.medicineId)
        //       };
        default:
            /**
          *If this reducer doesnot recognize the action type,or doesn't
          *care about this specific action,return the existing state unchanged.
          */
            return state;
    }
};

export default CartReducer;