import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Design from './Design';
import LogoutComponent from '../components/LogoutComponent'


class AdminLandingPage extends Component {
  //Render method tells react what to display,it shows the current user details.
  render() {
    //Array in local storage for registered current users.
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //return is a pure javascript for returning output of the method or function.
    return (
      //.bg-imgadmin class to create a background image for admin landing page.
      <div class="bg-imgadmin">
        <AppNavbar />
        <LogoutComponent />
        <p>{currentUser.name} {currentUser.role}</p>

        <Design />

        {/* <Container fluid>
          <Button color="link"><Link to="/customer">Customer</Link></Button>
          <Button color="link"><Link to="/medicine">Medicine</Link></Button>
          <Button color="link"><Link to="/orders">Orders</Link></Button>

        </Container> */}
      </div>
    );
  }
}

export default AdminLandingPage;