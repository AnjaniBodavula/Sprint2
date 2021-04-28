import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../store/actions/OrderActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';


class GetOrderByIdComponent extends Component {
 
    componentDidMount() {
        const { orderActions, match } = this.props;
        orderActions.fetchOrderById(match.params.id);
    }
    render() {
        const { order } = this.props;
        return (
            <div>
                {
                    order !== undefined ? 
                        
                            <Table id="mt-4">
                                <h3>Order Details</h3>
                                <tr>
                                    <th width="20%">Order ID</th>
                                    <th width="20%">orderDate</th>
                                    <th width="20%">dispatchDate</th>
                            <th width="20%">Total Cost</th>
                            <th width="20%">status</th>
                            <th width="20%">customerId</th>
                                   
                                </tr>
                                
                          
                                        <tr>
                                        <td>{order.orderId}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.dispatchDate}</td>
                                    <td>{order.totalCost}</td>
                                    <td>{order.status}</td>
                                    <td>{order.customerId}</td>
                                        </tr>
                          
 
                                        </Table>
                  
                        :
                        <h3>Loading....</h3>
                }
                <p>
                    <ButtonGroup>
                        {/*redirects to the customer details page at the admin side with the url. */}
                        <Button size="sm" color="primary" tag={Link} to={"/admin/orders"}>Back</Button>

                    </ButtonGroup>
                </p>
            </div>
        );
    }
}
 
function mapStateToProps(state) {
 
    return { order: state.orderReducer.order }
}
 
function mapDispatchToProps(dispatch) {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(GetOrderByIdComponent);