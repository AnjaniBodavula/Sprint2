export const addToCart = (medicine) => {

    return {
        type: 'ADD_TO_CART',
        payload: {
            medicine,
        }
    }
};

export const removeFromCart = (medicineId) => {

    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            medicineId: medicineId
        }
    }
};
placeOrder = (e) => {       

    let order = {           
        customerId: 1,
        medicineList: this.state.cart
    }

}