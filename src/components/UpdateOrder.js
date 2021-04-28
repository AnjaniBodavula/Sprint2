import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import * as orderActions from '../store/actions/OrderActions';
import * as orderActions from '../store/actions/OrderActions';
import { ButtonGroup } from 'reactstrap';

class UpdateOrder extends React.Component {
    constructor(props) {
        super(props);
        this.orderId = React.createRef();
        this.dispatchDate= React.createRef();
        this.orderDate = React.createRef();
        this.status = React.createRef();
        this.totalCost = React.createRef();
        this.customerId = React.createRef();

        // this.handleInputChange = this.handleInputChange.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
    }

    // handleInputChange(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }
    componentDidMount() {
        const { orderActions, match } = this.props;
        orderActions.fetchOrderById(match.params.id);
    }

    updateOrder(e) {
        e.preventDefault();

        let payload = {
            orderId: this.orderId.current.value,
            dispatchDate: this.dispatchDate.current.value,
            orderDate: this.orderDate.current.value,
            status: this.status.current.value,
            totalCost: this.totalCost.current.value,
            customerId: this.customerId.current.value,
            medicineList:this.props.order.medicineList

        }

        const { orderActions } = this.props;
        orderActions.updateOrder(payload);

    }


    render() {
        const { order, isUpdated } = this.props;

        if (isUpdated !== undefined && isUpdated) {
            // return <Redirect to='/customer'/>
            alert("updated successfully");
        }

        return (
            
            <div className="updateorder">
                <center>
                {
                    order !== undefined ?
                        <form onSubmit={this.updateOrder}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>Order Id:</label></td>
                                        <td><input defaultValue={order.orderId} type="text" ref={this.orderId} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>dispatchDate:</label></td>
                                        <td><input defaultValue={order.dispatchDate} type="text" ref={this.dispatchDate} /></td>
                                    </tr>
                                    {/* <tr>
                                    <td><label>Customer Password:</label></td>
                                    <td><input defaultValue={customer.password} type="text" ref={this.Password} /></td>
                                </tr> */}
                                    <tr>
                                        <td><label>OrderDate:</label></td>
                                        <td><input defaultValue={order.orderDate} type="text" ref={this.orderDate} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Status:</label></td>
                                        <td><input defaultValue={order.status} type="text" ref={this.status} /></td>

                                    </tr>
                                    <tr>
                                        <td><label>TotalCost:</label></td>
                                        <td><input defaultValue={order.totalCost} type="text" ref={this.totalCost} /></td>

                                    </tr>
                                    <tr>
                                        <td><label>CustomerId:</label></td>
                                        <td><input defaultValue={order.customerId} type="text" ref={this.customerId} /></td>

                                    </tr>
                                    
                                        {/* <option value="Divis">Divis</option>
                                        <option value="sun">sun</option>
                                        <option value="Cipla">Cipla</option>
                                        <option value="Reddy">Reddy</option>
                                        </select><br></br></td> */}
                                  

                                </tbody>
                            </table><br></br>
                            <ButtonGroup>
                            <Button size="sm" color="success" type="submit" value="submit">submit</Button>&nbsp;&nbsp;&nbsp;
                            <Button size="sm" color="primary" tag={Link} to={"/admin"}>Back</Button>
                            </ButtonGroup>
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
        order: state.orderReducer.order,
        isUpdated: state.orderReducer.isUpdated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateOrder);