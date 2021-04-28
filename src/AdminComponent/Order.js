import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as OrderActions from '../store/actions/OrderActions';
import AppNavbar from './AppNavbar';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';




class Order extends Component {


    constructor() {
        super();

    }

    //React lifecycle method to fetch the data of the orders,usually runs after first render() lifecycle.
    componentDidMount() {
        this.props.orderActions.fetchAllOrders();
    }
    handleDelete() {
        alert("admin Deleted")
    }



    render() {
        return (
            <div className="order">
                <AppNavbar />
                <h3>Order Details</h3>
                {
                    this.props.orders !== undefined ?


                        <Table id="mt-4">


                            <tr>
                                <th width="20%">order ID</th>
                                <th width="20%">Customer ID</th>

                                <th width="10%">Actions</th>

                            </tr>

                            {
                                this.props.orders.map((order, index) =>
                                    <tr>
                                        <td>{order.orderId}</td>
                                        <td>{order.customerId}</td>
                                        <td>
                                            <ButtonGroup>
                                                {/*redirects to the order details page at the admin side with the url given. */}
                                                <Button size="sm" color="primary" tag={Link} to={"/admin/order/view/" + order.orderId}>View</Button>&nbsp;&nbsp;
                                                <Button size="sm" color="primary" tag={Link} to={"/admin/updateorder/" + order.orderId}>Edit</Button>&nbsp;&nbsp;
                                                <Button size="sm" variant="contained" color="danger" onClick={() => { this.props.orderActions.deleteorder(order.orderId); alert("order deleted successfully with id " + order.orderId); }}>Delete</Button>
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
//component will receive: props.orders.
function mapStateToProps(state) {
    //It returns a plain object by selecting the part of the data from the store that the Order component needs.
    return { orders: state.orderReducer.orders }
}
//used for dispatching order actions to the store.
function mapDispatchToProps(dispatch) {
    //dispatching actions returned by action creators.
    return {
        orderActions: bindActionCreators(OrderActions, dispatch),

    }
};
//exports the Order component that can both get the current state from the store,and dispatch an action to the store to trigger and update to the state.
export default connect(mapStateToProps, mapDispatchToProps)(Order);