import Axios from 'axios';
// API URL
const apiUrl = 'http://localhost:8090';
// Sync Action
export const fetchAllMedicinesSuccess = (medicines) => {
    
    return {
        type: 'FETCH_ALL_MEDICINES_SUCCESS',
        medicines
    }
};
//Async Action
export const fetchAllMedicines = () => {
    
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return dispatch => {
        // Returns a promise
        return Axios.get(apiUrl + '/medicine/getallmedicines')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllMedicinesSuccess(resp.data))
            })
            .catch(error => {
                console.log(error);
                throw (error);
            });
    };
};
export const fetchMedicineByIdSuccess = (medicine) => {
    return {
        type: 'FETCH_MEDICINE_BY_ID_SUCCESS',
        payload: medicine
    }
};
export const fetchMedicineById = (medicineId) => {
    return (dispatch) => {
        return Axios.get(apiUrl + '/medicine/getmedicine/' + medicineId)
            .then(resp => {
                // Handle data with sync action
                dispatch(fetchMedicineByIdSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const createMedicineSuccess = (medicine) => {
    return {
        type: 'CREATE_MEDICINE_SUCCESS',
        payload: medicine
    }
};
export const createMedicine = (payload) => {
    let data = {
        medicineId: payload.medicineId,
        medicineName: payload.medicineName,
        medicineCost: payload.medicineCost,
        mfd: payload.mfd,
        expiryDate: payload.expiryDate,
        quantity: payload.quantity,
        categoryId: payload.categoryId,
        companyName: payload.companyName
        
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/medicine/addmedicine", data)
            .then(response => {
                dispatch(createMedicineSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const DeleteMedicineSuccess = (medicines) => {
    return {
        type: 'DELETE_MEDICINE_SUCCESS',
        payload: medicines
    }
};
 
export const deleteMedicine = (medicineId) => {
    return (dispatch) => {
        return Axios.delete(apiUrl + '/medicine/deletemedicine/' + medicineId)
            .then(resp => {
                // Handle data with sync action
                dispatch(DeleteMedicineSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const updateMedicineSuccess = (medicine) => {
    return {
        type: 'UPDATE_MEDICINE_SUCCESS',
        payload: medicine
    }
};
 
export const updateMedicine = (payload) => {
    console.log(payload);
    let data = {
        medicineId:payload.medicineId,
        medicineName: payload.medicineName,
        medicineCost: payload.medicineCost,
        mfd: payload.mfd,
        expiryDate:payload.expiryDate,
        quantity:payload.quantity,
        categoryId:payload.categoryId,
        companyName:payload.companyName

    
    }
    return (dispatch) => {
        return Axios.put(apiUrl + "/medicine/updatemedicine/"+payload.medicineId,data)
            .then(response => {
                dispatch(updateMedicineSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };

};