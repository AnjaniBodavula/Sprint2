import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../store/actions/OrderActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class GetOrderByCust extends Component {
    //React component life cycle method to fetch orders by custid.
    componentDidMount() {
        const { orderActions, match } = this.props;
        orderActions.fetchOrderByCustomerId(match.params.id);
    }
    render() {
        const { orders } = this.props;
        return (
            <div className="medicine">
                {
                    orders !== undefined ?
                        <Table id="mt-4">

                            <tr>
                                <th width="20%">Order ID</th>
                                <th width="20%">orderDate</th>
                                <th width="20%">dispatchDate</th>
                                <th width="20%">Total Cost</th>
                                <th width="20%">status</th>


                            </tr>

                            {
                                this.props.orders.map((order, index) =>
                                    <tr>
                                        <td>{order.orderId}</td>
                                        <td>{order.orderDate}</td>
                                        <td>{order.dispatchDate}</td>
                                        <td>{order.totalCost}</td>
                                        <td>{order.status}</td>

                                    </tr>)
                            }
                        </Table>
                        :
                        <h3>Loading....</h3>
                }
                <p>
                    <ButtonGroup>
                        {/*redirects to the customer details page at the admin side with the url. */}
                        <Button size="sm" color="primary" tag={Link} to={"/customer/orders"}>Back</Button>

                    </ButtonGroup>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { orders: state.orderReducer.orders }
}

function mapDispatchToProps(dispatch) {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetOrderByCust);