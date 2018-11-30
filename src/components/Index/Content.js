import React from "react";
import FontAwesome from 'react-fontawesome';

const Content = ()=> (
  <div>
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
                <div className="screen">
                  <img src={require("../images/2.jpg")} className="img-fluid" alt="pen with calendar" />
                </div>
                <div className="button">
          </div>
        </div>
        <div className="col-lg-8 my-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                <i className="fab fa-sticker-mule" />
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
  
  <section className="contact bg-primary" id="contact">
        <div className="container">
          <h2>Contact the developer.
          I <FontAwesome name="heart" size="1x"/>
            {" "} new friends!</h2>
          <ul className="list-inline list-social">
            <li className="list-inline-item social-twitter">
              <a  target="blank" href="https://www.linkedin.com/in/saud-tauqeer-16a305172/">
              <FontAwesome name="linkedin" size="1x"/>
              </a>
            </li>
            <li className="list-inline-item social-facebook">
              <a target="blank" href="https://twitter.com/@Saud31023894">
              <FontAwesome name="twitter" size="1x"/>
              </a>
            </li>
            <li className="list-inline-item social-google-plus">
              <a target="blank" href="mailto:saudtauqeer381@gmail.com?Subject=Hello%20Saud">
              <FontAwesome name="google" size="1x"/>
              </a>
            </li>
            <li className="list-inline-item social-resume">
              <a target="blank" href="https://saud-resume.netlify.com">
              <FontAwesome name="male" size="1x"/>
              </a>
            </li>
            <li className="list-inline-item social-github">
              <a target="blank" href="https://github.com/SaudTauqeer">
              <FontAwesome name="github" size="1x"/>
              </a>
            </li>
          </ul>
        </div> 
      </section>
      </div>
);


export default Content;