import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as customerActions from '../store/actions/CustomerActions';

import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Redirect } from 'react-router-dom';
class CreateCustomerComponent extends Component {

    constructor(props) {
        //When you want to use 'this.props' in constructor,call it as below.
        super(props);
        //Component needs to use local state,so directly use this.state to assign the initial state in the constructor.
        this.state = {
            Name: '',
            address: '',
            mobile: '',
            email: '',
            errors: {}
        }
        //bind the event handler methods for CreateCustomerComponent.
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createCustomer(e) {
        /** 
        *preventDefault() method cancels the event if 
        *it is cancelable i.e.,the default action that belongs to the event will not occur.
        */
        e.preventDefault();

        let payload = {

            customerName: this.state.Name,
            address: this.state.address,
            mobileNumber: this.state.mobile,
            emailId: this.state.email
        }
        if (this.validate()) {
            const { customerActions } = this.props;
            customerActions.createCustomer(payload);
        }

    }
    //propType validations.
    validate() {
        let customerName = this.state.Name;
        let address = this.state.address;
        let mobileNumber = this.state.mobile;
        let emailId = this.state.email;
        let errors = {};
        let isValid = true;

        if (!customerName) {
            isValid = false;
            errors["customerName"] = "Please enter your Name.";
        }
        if (typeof customerName !== "undefined") {
            if (!customerName.match(/^[a-zA-Z]+$/)) {
                isValid = false;
                errors["customerName"] = "Only letters";
            }
        }
        if (!address) {
            isValid = false;
            errors["address"] = "Please enter your Address.";
        }
        if (!emailId) {
            isValid = false;
            errors["emailId"] = "Please enter your Email.";
        }
        if (typeof emailId !== "undefined") {
            var pattern = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            if (!pattern.test(emailId)) {
                isValid = false;
                errors["emailId"] = "please enter valid email address";
            }
        }
        if (!mobileNumber) {
            isValid = false;
            errors["mobileNumber"] = "Please enter your ContactNumber.";
        }
        if (typeof mobileNumber !== "undefined") {

            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(mobileNumber)) {
                isValid = false;
                errors["mobileNumber"] = "Please enter only number.";
            } else if (mobileNumber.length != 10) {
                isValid = false;
                errors["mobileNumber"] = "Please enter valid phone number.";
            }
        }
        this.setState({
            errors: errors
        });
        return isValid;
    }


    render() {
        const { customer } = this.props;

        if (customer !== undefined) {
            alert('You have successfully added your credentials please login using your credentials to use our app')
            return <Redirect to="/login" />;
        }
        return (
            <div class="loginbg-img">
                <center>
                    {/* Form to add customers */}                                                                                                                                                                                            <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                    <h3>Add Customer</h3>
                    <form onSubmit={this.createCustomer}>
                        <p>

                            <input class="input" type="text" placeholder="Cuatomer Name" name="Name" id="Name" value={this.state.Name} onChange={this.handleInputChange}></input>

                            <div className="text-danger">{this.state.errors.customerName}</div>

                        </p>  <p>
                            <input class="input" type="address" placeholder="Customer Address" name="address" id="address" value={this.state.address} onChange={this.handleInputChange}></input>

                            <div className="text-danger">{this.state.errors.address}</div>
                        </p> <p>

                            <input class="input" type="Phone" placeholder="mobile Number" name="mobile" id="mobile" value={this.state.mobile} onChange={this.handleInputChange}></input>

                            <div className="text-danger">{this.state.errors.mobileNumber}</div>
                        </p><p>
                            <input class="input" type="email" placeholder="EmailId" name="email" id="email" value={this.state.email} onChange={this.handleInputChange}></input>

                            <div className="text-danger">{this.state.errors.emailId}</div>
                        </p><p>
                            <ButtonGroup>
                                {/* <input type="submit" value="submit"></input> */}
                                <Button variant="contained" color="success" type="submit" value="submit" >Submit</Button>&nbsp;&nbsp;
                                <Button variant="contained" color="primary" tag={Link} to="/">Cancle</Button>
                            </ButtonGroup>
                        </p>
                    </form>
                    {/*When the new customer data is added,
                an alert message will be shown 'Customer created successfully with id.*/}
                    {
                        this.props.customer !== undefined &&
                        alert("Customer Created Succssfully with id" + this.props.customer.customerName)
                    }
                </center>
            </div>);


    }
}
//component will receive: props.newcustomer.
function mapStateToProps(state) {
    //It returns a plain object by selecting the part of the data from the store that the CreateCustomerComponent needs.
    return { customer: state.customerReducer.newCustomer }
}
//used for dispatching customer actions to the store.
function mapDispatchToProps(dispatch) {
    //dispatching actions returned by action creators.
    return {
        customerActions: bindActionCreators(customerActions, dispatch)
    }
};
//exports the CreateCustomerComponent that can both get the current state from the store,and dispatch an action to the store to trigger and update to the state.
export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomerComponent);