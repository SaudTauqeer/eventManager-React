import React from "react";
import FontAwesome from 'react-fontawesome';
 const Content = ()=> (
  <div>

  <section className="features">
    <div className="container">
      <div className="section-heading text-center">
        <h2>What can you do with event manager?</h2>
        <h3> It's so simple ! </h3>
        <hr />
      </div>
      <div className="row">
        <div className="col-lg-4 my-auto">
                <div className="screen">
                  <img src={require("../images/calendarWithPen.jpg")} className="img-fluid" alt="pen with calendar" />
                </div>
                <div className="button">
          </div>
        </div>
        <div className="col-lg-8 my-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                <FontAwesome className="mb-3" name="check-square" size="4x"/>
                  <h3>Make it</h3>
                  <p className="text-muted">Simply prepare your card with images according to event.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                <FontAwesome className="mb-3" name="address-card" size="4x"/>
                  <h3>Add it</h3>
                  <p className="text-muted"> Add a well-wishing message in an email text. </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <FontAwesome className="mb-3" name="save" size="4x"/>
                  <h3>Save it</h3>
                  <p className="text-muted">Save your event messages with your selected images with specific date and time.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                <FontAwesome className="mb-3" name="send" size="4x"/>
                  <h3>Send it</h3>
                  <p className="text-muted">Saved events will be delivered automatically at scheduled time via E-mail. </p>
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
            <a href="http://eventmanager-web-api.herokuapp.com/auth/google" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
          </div>
        </div>
        <div className="overlay" />
      </section>

      <section className="contact bg-primary" >
        <div className="container">
          <h2>Contact the developer.
              I <FontAwesome name="heart" size="lg"/>
            {" "} new friends!</h2>
          <ul className="list-inline list-social">
            <li className="list-inline-item social-twitter">
              <a  target="blank" href="https://www.linkedin.com/in/saud-tauqeer-16a305172/">
              <FontAwesome name="linkedin" size="lg"/>
              </a>
            </li>
            <li className="list-inline-item social-facebook">
              <a target="blank" href="https://twitter.com/@Saud31023894">
              <FontAwesome name="twitter" size="lg"/>
              </a>
            </li>
            <li className="list-inline-item social-google-plus">
              <a target="blank" href="mailto:saudtauqeer381@gmail.com?Subject=Hello%20Saud">
              <FontAwesome name="google" size="lg"/>
              </a>
            </li>
            <li className="list-inline-item social-resume">
              <a target="blank" href="https://saud-resume.netlify.com">
              <FontAwesome name="male" size="lg"/>
              </a>
            </li>
            <li className="list-inline-item social-github">
              <a target="blank" href="https://github.com/SaudTauqeer">
              <FontAwesome name="github" size="lg"/>
              </a>
            </li>
          </ul>
        </div> 
      </section>
      </div>
);
 export default Content; 