import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import FirstPageNavBar from './FirstPageNavBar';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

//Design component for about page in the navigation bar.
export default class AboutPage extends Component {


  render() {
    return (
      <div >

        <FirstPageNavBar />
        <div class="about">
          <center>
            <h4>About Ayurveda</h4>
            <h2>Ayurveda: A Great Way To Healing & Wellness</h2>


          </center>
        </div>

        {/*            
           <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="http://localhost:3000/am4.jpg" class="d-block w-100" ></img>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="http://localhost:3000/am2.jpg" class="d-block w-100"></img>
    </div>
    <div class="carousel-item">
      <img src="http://localhost:3000/am3.jpg" class="d-block w-100"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            */}
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(http://localhost:3000/amss11.jpeg)` }}>
                <span>
                  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(http://localhost:3000/amss9.jpeg)` }}>
                <span><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url(http://localhost:3000/amss8.jpeg)` }}>
                <span><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></span>
              </div>
            </div>
          </Slide>
        </div>


        <hr></hr>
        <div>
          <center>
            <h1>The Science</h1>
            <p>Ayurveda originated in the Indian subcontinent, supposedly 5000 years ago as a healing & wellness science.<br></br>

Ayurveda offers a range of traditional therapies and authentic medicines to impart wellness to the body, mind and spirit.<br></br>

These therapies and medicines can be used for curative purposes as well as to improve general health of body and mind, making it a perfect rejuvenation science as well.<br></br>

Ayurveda also comprises the knowledge of lifestyle curated to different seasons which will help to prevent diseases and maintain wellness. Over last 5000 years Ayurveda has been connecting the human race and nature very deeply for health & longevity.<br></br></p>
          </center>
        </div>

      </div>
    );

  }
}