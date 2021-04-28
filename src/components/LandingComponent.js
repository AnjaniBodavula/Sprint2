import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import FirstPageNavBar from './FirstPageNavBar';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

class LandingComponent extends Component {

  render() {
    //Array in local storage for registered current users.
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return (
      //class to create a background image.
      <div class="bg-img">


        <FirstPageNavBar />



        <Container fluid>
          {/* redirects to login page when clicked on login button */}
          <Button className="float-right btn  btn-lg" color='primary' tag={Link} to="/login">Login</Button>
          {/* redirects to register page when clicked on register button */}
          <Button className="float-right btn btn-danger btn-lg" tag={Link} to="/register">Register</Button>

        </Container>

        <div class="demo-1">
          <h3>Ayurveda Medicine</h3>

        </div >
        <div className="slide-container" >
          <Slide>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(http://localhost:3000/amss11.jpeg)` }}>
                <span>
                  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(http://localhost:3000/amss15.jpg)` }}>
                <span>
                  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(http://localhost:3000/amss14.jpg)` }}>
                <span><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(http://localhost:3000/amss8.jpeg)` }}>
                <span><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></span>
              </div>
            </div>
          </Slide>

        </div>
        <div>
          <center>
            <h3>About Ayruvadha Medicine</h3>
            <p1> This web Design by <br />
     G.Swarna Rekha<br />
     B.Meghana<br />
     J.Jaswanthi<br />
     Anjani<br />
     Y.Gopi Reddy
     </p1>
          </center>
        </div>



      </div>



    );
  }
}

export default LandingComponent;