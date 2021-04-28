import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomerNavbar from './CustomerNavbar';
import LogoutComponent from '../components/LogoutComponent';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import CustomerDesign from './CustomerDesign';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../store/actions/CustomerActions';


class CustomerLandingComponent extends Component {
  componentDidMount() {
    const { customerActions, match } = this.props;
    customerActions.fetchCustomerById(match.params.id);
  }
  render() {
    const { customer } = this.props;
    //Array in local storage for registered current users.
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return (

      <div class="bg-imgadmin">
        {
          customer !== undefined ?
            <div>

              <CustomerNavbar />
              <LogoutComponent />
              <CustomerDesign />
              {/* <p>{currentUser.name}  </p> */}
              <div class="idrow" >
                <div class="idcolumn">
                  <div class="idcard">
                    <h3>Customer Details</h3>
                    <pre>
                    <p>
                      Customer ID :               {customer.customerId}<br />
                      Customer Name :        {customer.customerName}<br />
                      MobileNumber :     {customer.mobileNumber}<br />
                      Emailid:{customer.emailId}<br />
                      <Button size="sm" color="secondary" tag={Link} to={"/customer/update/" + customer.customerId}>Edit</Button>&nbsp;&nbsp;
                      <Button size="sm" color="secondary" tag={Link} to={"/customer/order/" + customer.customerId}>Order</Button>
                    </p>
                    </pre>
                    {/* <p><Link to={`/customer/order/cust/${customer.customerId}`}>order</Link></p> */}
                  </div>
                </div>
              </div>
              {/* <Button size="sm" color="secondary" tag={Link} to={`/customer/order/cust/${customer.customerId}`}>Order</Button> */}


              <Container fluid>
                {/* <Button color="link"><Link to="/customer/Profile">Customer</Link></Button>
               <Button color="link"><Link to="/customershop">Medicine</Link></Button>
              <Button color="link"><Link to="/customer/order">Orders</Link></Button> */}

              </Container>
            </div>
            : <h3>Loading....</h3>
        }
      </div>


    );

  }
} function mapStateToProps(state) {

  return { customer: state.customerReducer.customer }
}

function mapDispatchToProps(dispatch) {
  return {
    customerActions: bindActionCreators(customerActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerLandingComponent);