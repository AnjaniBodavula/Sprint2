import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../store/actions/CustomerActions';
import AppNavbar from './AppNavbar';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';




class Customer extends Component {


    constructor() {
        super();

    }

    //React lifecycle method to fetch the data of the customers,usually runs after first render() lifecycle.
    componentDidMount() {
        this.props.customerActions.fetchAllCustomers();
    }
    handleDelete() {
        alert("admin Deleted")
    }



    render() {
        return (
            <div className="list">
                <AppNavbar />
                <h3>Customer Details</h3>
                {
                    this.props.customers !== undefined ?


                        <Table id="mt-4">


                            <tr>
                                <th width="1%">Customer ID</th>
                                <th width="1%">Customer Name</th>

                                <th width="10%">Actions</th>

                            </tr>

                            {
                                this.props.customers.map((customer, index) =>
                                    <tr>
                                        <td>{customer.customerId}</td>
                                        <td>{customer.customerName}</td>
                                        <td>
                                            <ButtonGroup>
                                                {/*redirects to the customer details page at the admin side with the url. */}
                                                <Button size="sm" color="primary" tag={Link} to={"/admin/customer/" + customer.customerId}>View</Button>

                                            </ButtonGroup>&nbsp;&nbsp;
                                            <ButtonGroup>
                                                <Button size="sm" variant="contained" color="danger" onClick={() => { this.props.customerActions.deleteCustomer(customer.customerId); alert("Customer deleted successfully with id " + customer.customerId); }}>Delete</Button>
                                            </ButtonGroup>
                                        </td>

                                    </tr>)
                            }



                        </Table>

                        :
                        <h3>Loading....</h3>
                }
                <p>
                    <ButtonGroup>
                        {/*redirects to the customer details page at the admin side with the url. */}
                        <Button size="sm" color="primary" tag={Link} to={"/admin"}>Back</Button>

                    </ButtonGroup>
                </p>
            </div>
        );
    }
}
//component will receive: props.customers.
function mapStateToProps(state) {
    //It returns a plain object by selecting the part of the data from the store that the Customer component needs.
    return { customers: state.customerReducer.customers }
}
//used for dispatching customer actions to the store.
function mapDispatchToProps(dispatch) {
    //dispatching actions returned by action creators.
    return {
        customerActions: bindActionCreators(customerActions, dispatch),

    }
};
//exports the Customer component that can both get the current state from the store,and dispatch an action to the store to trigger and update to the state.
export default connect(mapStateToProps, mapDispatchToProps)(Customer);