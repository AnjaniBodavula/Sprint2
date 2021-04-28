import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../store/actions/OrderActions';
import { Link } from 'react-router-dom';
class GetAllOrdersComponent extends Component {


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
            <div>
                {
                    this.props.orders !== undefined ?

                        <table border="1">
                            {/* Table to view all the order details.*/}
                            <caption>Order Details</caption>
                            <thead>
                                <tr>
                                    <td>Order ID</td>
                                    <td>Order Date</td>
                                    <td>Dispatch Date</td>
                                    <td>Total Cost</td>
                                    <td>Status</td>
                                    <td>Customer Id</td>
                                    <td>Medicine List</td>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.orders.map((order, index) =>
                                        <tr>
                                            <td>{order.orderId}</td>
                                            <td>{order.orderDate}</td>
                                            <td>{order.dispatchDate}</td>
                                            <td>{order.totalCost}</td>
                                            <td>{order.status}</td>
                                            <td>{order.customerId}</td>
                                            <td>{order.medicineList}</td>

                                        </tr>)
                                }
                            </tbody>

                        </table>

                        :
                        <h3>Loading....</h3>
                }
            </div>
        );
    }
}
function mapStateToProps(state) {

    return { orders: state.orderReducer.orders }
}

function mapDispatchToProps(dispatch) {
    return {
        orderActions: bindActionCreators(orderActions, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllOrdersComponent);