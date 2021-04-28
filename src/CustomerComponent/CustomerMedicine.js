import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as medicineActions from '../store/actions/MedicineActions';
import * as  orderActions from '../store/actions/OrderActions';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class GetAllMedicinesComponent extends Component {
    
    
    constructor() {
        super();
        this.state = {
            cart: [

            ]
        };

    }
    

    componentDidMount() {
        this.props.medicineActions.fetchAllMedicines();
    }

    addToCart = (m, e) => {

        e.preventDefault();
        //const id = e.target.value;

        // this.props.medicineActions.fetchMedicineById(id);
        let medicine = {
            medicineId: m.medicineId,
            medicineName: m.medicineName,
            medicineCost: m.medicineCost,
            mfd: m.mfd,
            expiryDate: m.expiryDate,
            quantity: m.quantity,
            companyName: m.companyName,
            category: m.category
        }
        console.log(medicine);

        this.setState({
            cart: [...this.state.cart, medicine]
        })
    }

    placeOrder = (e) => {


        // var today = new Date();
        // var date = today.getDate();
        // var month = today.getMonth() + 1;
        // var year = today.getFullYear();
        // var orderDate  = year+"-"+month+"-"+date;
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let order = {
           
           
            customerId: currentUser.name,
            medicineList: this.state.cart
            
        }
        this.props.orderActions.createOrder(order);
        alert("order placed");


    }
            

    render() {
        
        // console.log(this.state.cart);
        //console.log(this.props.medicine);
        return (
            
            <div>  <center><h1> Ayurveda Medicine</h1> </center> 
                {
                    this.props.medicines !== undefined ?
                   

                    <Table className="mt-4">
                         
                                <tr>
                                    <th width="20%">Medicine ID</th>
                                    <th width="20%">Medicine Name</th>
                                    <th width="20%">Price</th>
                                    <th width="20%">Actions</th>

                                </tr>
                            
                                {
                                    this.props.medicines.map((medicine, index) =>
                                        <tr>
                                            <td>{medicine.medicineId}</td>
                                            <td>{medicine.medicineName}</td>
                                            <td className="price-new">${medicine.medicineCost}</td>
                                            <td>
                                            <ButtonGroup>
                                                 <Button size="sm" color="primary" tag={Link} to={"/customer/medicine/view/" + medicine.medicineId}>View</Button>
                                                <Button size="sm" color="success" onClick={e => this.addToCart(medicine, e)}>Add To Cart</Button>
                                                </ButtonGroup>
                                                </td>
                                            
                                        </tr>)
                                }
                           

                           </Table>

                        :
                        <h3>Loading....</h3>
                }
                <div className="cart">
                    🛒Cart
                    <ul>
                        {
                            this.state.cart.map(item => <li key={item}>{item.medicineId} {item.medicineName} - ${item.medicineCost}</li>)

                        }
                        {
                            this.state.cart.length > 0 && <Button size="larg" color="success" onClick={this.placeOrder}> Place Order </Button>
                        }

                    </ul>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {

    return {
        medicines: state.medicineReducer.medicines,
        medicine: state.medicineReducer.medicine,
        cart: state.cartReducer.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        medicineActions: bindActionCreators(medicineActions, dispatch),
            orderActions: bindActionCreators(orderActions, dispatch)
        

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllMedicinesComponent);