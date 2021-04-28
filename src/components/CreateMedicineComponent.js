import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as medicineActions from '../store/actions/MedicineActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

class CreateMedicineComponent extends Component {
    constructor(props) {
        //When you want to use 'this.props' in constructor,call it as below.
        super(props);
        //Component needs to use local state,so directly use this.state to assign the initial state in the constructor.
        this.state = {
            medicineId: '',
            medicineName: '',
            medicineCost: '',
            mfd: '',
            expiryDate: '',
            quantity: '',
            categoryId: '',
            companyName: '',
            errors:{}

        }
        //bind the event handler methods for CreateMedicineComponent.
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createMedicine = this.createMedicine.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createMedicine(e) {
        /** 
        *preventDefault() method cancels the event if 
        *it is cancelable i.e.,the default action that belongs to the event will not occur.
        */
        e.preventDefault();

        let payload = {
            medicineId: this.state.medicineId,
            medicineName: this.state.medicineName,
            medicineCost: this.state.medicineCost,
            mfd: this.state.mfd,
            expiryDate: this.state.expiryDate,
            quantity: this.state.quantity,
            categoryId: this.state.categoryId,
            companyName: this.state.companyName

        }

        if (this.validate()) {
            const { medicineActions } = this.props;
            medicineActions.createMedicine(payload);
        }

    }
    validate() {
        let medicineId = this.state.medicineId;
        let medicineName = this.state.medicineName;
        let medicineCost = this.state.medicineCost;
        let mfd = this.state.mfd;
        let expiryDate = this.state.expiryDate;
        let quantity = this.state.quantity;
        let categoryId = this.state.categoryId;
        let companyName = this.state.companyName;
        let errors = {};
        let isValid = true;

        if (!medicineId) {
            isValid = false;
            errors["medicineId"] = "Please enter your MedicineId.";
        }
        if (!medicineName) {
            isValid = false;
            errors["medicineName"] = "please enter medicine name ";
        }
        if (typeof medicineName !== "undefined") {
            if (!medicineName.match(/^[a-zA-Z]+$/)) {
                isValid = false;
                errors["medicineName"] = "Only letters";
            }
        }
        if (!medicineCost) {
            isValid = false;
            errors["medicineCost"] = "Please enter medicine Cost.";
        }
        if (typeof medicineCost !== "undefined") {
            if (!medicineCost.match(/^[0-9\b]+$/)) {
                isValid = false;
                errors["medicineCost"] = "Only numbers";
            }
        }
        if (!mfd) {
            isValid = false;
            errors["mfd"] = "Please enter Manufactured date.";
        }
        // if (typeof mfd !== "undefined") {
        //     var pattern = new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}|3[0-1]|{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
        //     if (!pattern.test(mfd)) {
        //         isValid = false;
        //         errors["mfd"] = "please enter valid date";
        //     }
        // }
        if (!expiryDate) {
            isValid = false;
            errors["expiryDate"] = "Please enter Manufactured date.";
        }
        // if (typeof expiryDate !== "undefined") {
        //     var pattern = new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}|3[0-1]|{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
        //     if (!pattern.test(expiryDate)) {
        //         isValid = false;
        //         errors["expiryDate"] = "please enter valid date";
        //     }
        // }
        if (!quantity) {
            isValid = false;
            errors["quantity"] = "Please enter quantity.";
        }
        if (typeof quantity !== "undefined") {

            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(quantity)) {
                isValid = false;
                errors["quantity"] = "Please enter only numbers.";
            }
        }
        if (!categoryId) {
            isValid = false;
            errors["categoryId"] = "please enter category";
        }
        if (typeof categoryId !== "undefined") {
            if (!categoryId.match(/^[a-zA-Z]+$/)) {
                isValid = false;
                errors["categoryId"] = "please write only letters";
            }
        }
        if (!companyName) {
            isValid = false;
            errors["companyName"] = "please enter company name";
        }
        if (typeof companyName !== "undefined") {
            if (!companyName.match(/^[a-zA-Z]+$/)) {
                isValid = false;
                errors["companyName"] = "please write only letters";
            }
        }
        this.setState({
            errors: errors
        });
        return isValid;
    }

    clear = () => {
        this.setSate = ({
            medicineId: '',
            medicineName: '',
            medicineCost: '',
            mfd: '',
            expiryDate: '',
            quantity: '',
            categoryId: '',
            companyName: ''

        });
    }

    render() {
        return (
            < div class="loginbg-img" >
                <center>
                    {/* Form to add a new medicine */}                                                                                                                                                                     <br></br><br></br>
                    < h3 > Add Medicine </ h3 >
                    <form onSubmit={this.createMedicine}>
                        <p>

                            < input class="input" type="text" placeholder="Medicine Id" name="medicineId" id="medicineId"
                                value={this.state.medicineId} onChange={this.handleInputChange} ></input>
                                <div className="text-danger">{this.state.errors.medicineId}</div>

                        </p>

                            <p>
                            < input class="input" type="text" placeholder="Medicine Name" name="medicineName"
                                id="medicineName" value={this.state.medicineName}
                                onChange={this.handleInputChange}></ input >
                                <div className="text-danger">{this.state.errors.medicineName}</div>
                        </p><p>


                            < input class="input" type="text" placeholder="Medicine Cost" name="medicineCost"
                                id="medicineCost" value={this.state.medicineCost}
                                onChange={this.handleInputChange}></ input >
                                <div className="text-danger">{this.state.errors.medicineCost}</div>
                        </p> <p>

                            < input class="input" type="date" placeholder="Manufactured Date" name="mfd"
                                id="mfd" value={this.state.mfd}
                                onChange={this.handleInputChange}></input>
                                <div className="text-danger">{this.state.errors.mfd}</div>
                        </p> <p>



                            < input class="input" type="date" placeholder="Expiry Date" name="expiryDate" id="expiryDate"
                                value={this.state.expiryDate} onChange={this.handleInputChange}></ input >
                                <div className="text-danger">{this.state.errors.expiryDate}</div>
                        </p> <p>

                            < input class="input" type="text" placeholder="Quantity" name="quantity"
                                id="quantity" value={this.state.quantity}
                                onChange={this.handleInputChange}></input>
                                <div className="text-danger">{this.state.errors.quantity}</div>
                        </p><p>

                            < input class="input" type="text" placeholder="Category" name="categoryId"
                                id="categoryId" value={this.state.categoryId}
                                onChange={this.handleInputChange}></input>
                                <div className="text-danger">{this.state.errors.categoryId}</div>
                        </p><p>

                            < input class="input" type="text" placeholder="Company Name" name="companyName"
                                id="companyName" value={this.state.companyName}
                                onChange={this.handleInputChange}></input>
                                <div className="text-danger">{this.state.errors.companyName}</div>

                        </p>
                        <p>

                            <ButtonGroup>
                                {/* < input type="submit" value="submit" ></ input > */}
                                <Button size="sm" color="success" type="submit" value="submit">submit</Button>&nbsp;&nbsp;
                                < Button color="danger" tag={Link} to="/admin/medicine" > Cancel </ Button >
                            </ButtonGroup>
                        </p>

                    </ form >
                    {
                        //When the new Medicine data is added,an alert message will be shown 'Medicine created successfully with id'.
                        this.props.medicine !== undefined &&
                        alert("Medicine Created Successfully with id" + this.props.medicine.medicineId)
                    }
                </center>
            </ div >);
    }
}
//component will receive: props.newmedicine.
function mapStateToProps(state) {
    //It returns a plain object by selecting the part of the data from the store that the CreateMedicineComponent needs.
    return { medicine: state.medicineReducer.newMedicine }
}
//used for dispatching medicine actions to the store.
function mapDispatchToProps(dispatch) {
    //dispatching actions returned by action creators.
    return {
        medicineActions: bindActionCreators(medicineActions, dispatch)
    }
};
//exports the CreateMedicineComponent that can both get the current state from the store,and dispatch an action to the store to trigger and update to the state.
export default connect(mapStateToProps, mapDispatchToProps)(CreateMedicineComponent);