import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
//Navigation bar design.
export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar color="dark" dark expand="larg">
      <NavbarBrand >  </NavbarBrand>
      {/* redirects to the first home page.*/}
      <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
      {/* redirects to the about page.*/}
      <NavbarBrand tag={Link} to="/about">About</NavbarBrand>
      {/* redirects to the blog page.*/}
      <NavbarBrand tag={Link} to="/blog">Blog</NavbarBrand>
      {/* redirects to the contact us page.*/}
      <NavbarBrand tag={Link} to="/contactus">Contact Us</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}