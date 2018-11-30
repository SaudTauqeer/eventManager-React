import React from "react";

const Header = () => (
  <div>
    <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5"> <span className="display-3">Event Manager</span> <br /> is a web based App. It helps you manage events easily.</h1>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
                <div className="screen">
                  <img src={require('../images/todo-list.jpg')} className="img-fluid" alt="Sticky notes" />
                </div>
            </div>
          </div>
        </div>
  </header>
  </div>
);

export default Header;