import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import FirstPageNavBar from './FirstPageNavBar';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

//design component for contact details page in the navigation bar.
export default class ContactDetails extends Component {


  render() {
    return (
      <div>

        <FirstPageNavBar />
        <div class="about">
          <center>
            <h1>Ayurvedic Medicine</h1>
          </center>
        </div>
        <br></br>

        <center>
          <p><h3><b>GET IN TOUCH</b></h3><br></br>
For any queries or clarifications regarding Ayurveda products or its services feel free
to get in touch with us at anytime</p>
        </center>
        <br></br>
        <br></br>
        {/* <div class="examplehome3">
<img src="cg3.jpeg" class="center2"></img>
</div> */}
        <center>
          <h4>Contact Us</h4>
          <h4>91-141-2635816</h4>
        </center>
        <br></br>
        {/* <div class="examplehome3">
<img src="cg2.jpeg" class="center2"></img>
</div> */}
        <center>
          <h4>Email Us</h4>
          <h4>onlineayurvedicmedicine@gmail.com</h4>

        </center>
        {/* <div class="examplehome3">
<img src="cg1.jpeg" class="center"></img>
</div> */}
      </div>
    );

  }
}