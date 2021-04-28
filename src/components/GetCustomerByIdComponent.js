import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../store/actions/CustomerActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
class GetCustomerByIdComponent extends Component {
    //React component life cycle method to fetch customers by id.
    componentDidMount() {
        const { customerActions, match } = this.props;
        customerActions.fetchCustomerById(match.params.id);
    }
    render() {
        const { customer } = this.props;
        return (
            <div >
                {
                    customer !== undefined ?
                        <div>

                            <Table id="mt-4">
                            <h3>customer details</h3>

                                <tr>
                                    <th width="20%">Customer ID</th>
                                    <th width="20%">Customer Name</th>
                                    <th width="20%">Address</th>
                                    <th width="20%">MobileNumber</th>
                                    <th width="20%">Emailid</th>


                                </tr>


                                <tr>
                                    <td>{customer.customerId}</td>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.mobileNumber}</td>
                                    <td>{customer.emailId}</td>
                                    
                            </tr>
 
                        </Table>
                                <p>
                                    <ButtonGroup>
                                        {/*redirects to the customer details page at the admin side with the url. */}
                                        <Button size="sm" color="primary" tag={Link} to={"/admin/customer"}>Back</Button>

                                    </ButtonGroup>
                                </p>
                        </div>
                        : <h3>Loading....</h3>
                }
            </div>


        );
    }
}

function mapStateToProps(state) {

    return { customer: state.customerReducer.customer }
}

function mapDispatchToProps(dispatch) {
    return {
                    customerActions: bindActionCreators(customerActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetCustomerByIdComponent);