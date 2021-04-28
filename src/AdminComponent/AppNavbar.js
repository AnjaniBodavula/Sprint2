import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }
  //toggle method is used to expand or collapse the menu by changing the value of the isOpen state to true or false.
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  //Render method tells react what to display,it shows the navbar of the application.
  render() {
    return <Navbar color="dark" dark expand="md">
      {/* Redirect to admin home page with the given url */}
      <NavbarBrand tag={Link} to="/admin">Home</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      {/* Binding the menu in the navigation bar */}
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}