import React from "react";
import "./index.css";
import FontAwesome from 'react-fontawesome';
//import Components

import NavBar from "./Navbar";
const Index = (props) => (

  <div>
  <NavBar />
  
  <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">Event Manager is a web based App. It helps you manage events easily.</h1>
            <a href="#tagline" className="btn btn-outline btn-xl ">Start Now for Free!</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
                <div className="screen">
                  {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                  <img src={require('../images/download.png')} className="img-fluid" alt="/" />
                </div>
                <div className="button">
                  {/* You can hook the "home button" to some JavaScript events or just remove it */}
                </div>
              </div>
            </div>
          </div>
        </div>
  </header>
  <section className="download bg-primary text-center" id="tagline">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="section-heading">Ever forgot an Event?</h2>
          <p>See below some key features that event manager includes</p>
        </div>
      </div>
    </div>
  </section>
  <section className="features" id="features">
    <div className="container">
      <div className="section-heading text-center">
        <h2>What can you do with event manager?</h2>
        <hr />
      </div>
      <div className="row">
        <div className="col-lg-4 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                  <img src={require("../images/2.jpg")} className="img-fluid" alt="/" />
                </div>
                <div className="button">
                  {/* You can hook the "home button" to some JavaScript events or just remove it */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 my-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                <FontAwesome className="mb-3" name="linkedin" size="2x"/>
                  <h3>Device Mockups</h3>
                  <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-camera text-primary" />
                  <h3>Flexible Use</h3>
                  <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-present text-primary" />
                  <h3>Free to Use</h3>
                  <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-lock-open text-primary" />
                  <h3>Open Source</h3>
                  <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="cta">
    <div className="cta-content">
      <div className="container">
        <h2>Stop forgetting.<br />Start managing.</h2>
        <a href="#contact" className="btn btn-outline btn-xl ">Let's Get Started!</a>
      </div>
    </div>
    <div className="overlay" />
  </section>
  <section className="contact bg-primary" id="contact">
    <div className="container">
      <h2>We
        <i className="fas fa-heart" />
        new friends!</h2>
      <ul className="list-inline list-social">
        <li className="list-inline-item social-twitter">
          <a href="/">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li className="list-inline-item social-facebook">
          <a href="/">
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li className="list-inline-item social-google-plus">
          <a href="/">
            <i className="fab fa-google-plus-g" />
          </a>
        </li>
      </ul>
    </div>
  </section>
  <footer>
    <div className="container">
      <p>© Your Website 2018. All Rights Reserved.</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="/">Privacy</a>
        </li>
        <li className="list-inline-item">
          <a href="/">Terms</a>
        </li>
        <li className="list-inline-item">
          <a href="/">FAQ</a>
        </li>
      </ul>
    </div>
  </footer>
</div>

);


export default Index;