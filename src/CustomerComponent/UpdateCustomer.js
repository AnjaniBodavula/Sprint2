
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as customerActions from '../store/actions/CustomerActions';

class UpdateCustomer extends React.Component {
    constructor(props) {
        super(props);

        this.Id = React.createRef();
        this.Name = React.createRef();
        this.mobile = React.createRef();
        this.email = React.createRef();
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }

    // handleInputChange(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }
    componentDidMount() {
        const { customerActions, match } = this.props;
        customerActions.fetchCustomerById(match.params.id);
    }

    updateCustomer(e) {
        e.preventDefault();

        let payload = {
            customerId: this.Id.current.value,
            customerName: this.Name.current.value,
            mobileNumber: this.mobile.current.value,
            emailId: this.email.current.value
        }

        if (this.validate()) {
            const { customerActions } = this.props;
            customerActions.updateCustomer(payload);

        }
    }
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
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const { customer, isUpdated } = this.props;

        if (isUpdated !== undefined && isUpdated) {
            // return <Redirect to='/customer'/>
            alert("updated successfully");
        }

        return (
            <div class="loginbg-img">
                <center>
                    <br></br><br></br><br></br><br></br>
                    <h3>Update Customer</h3>
                    <br></br>
                    {
                        customer !== undefined ?
                            <form onSubmit={this.updateCustomer}>
                                <p>


                                    <input class="input" defaultValue={customer.customerId} placeholder="Customer Id" type="text" ref={this.Id} />
                                </p>  <p>


                                    <input class="input" defaultValue={customer.customerName} placeholder="Customer name" type="text" ref={this.Name} />

                                </p>   
                                <p>


                                    <input class="input" defaultValue={customer.address} placeholder="address" type="text" ref={this.address} />
                                </p>
                                <p>


                                    <input class="input" defaultValue={customer.mobileNumber} placeholder="mobile number" type="text" ref={this.mobile} />
                                </p>  <p>
                                    <input class="input" defaultValue={customer.emailId} placeholder="emailid" type="text" ref={this.email} />
                                </p> <p>
                                    <ButtonGroup>
                                        <Button size="sm" color="success" type="submit" value="submit" >Submit</Button>&nbsp;&nbsp;
                                        {/* <input type="submit" value="submit"></input> */}
                                        <Button variant="contained" color="primary" tag={Link} to={`/customer/${currentUser.name}`}>Cancel</Button>
                                    </ButtonGroup>
                                </p>
                            </form>
                            : <h2>Loading....</h2>
                    }
                </center>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        customer: state.customerReducer.customer,
        isUpdated: state.customerReducer.isUpdated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCustomer);