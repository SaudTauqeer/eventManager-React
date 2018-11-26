import React from "react";
import {NavLink, Navbar, Container, } from "reactstrap";
import "./messageCreater.css";

const Footer = ()=> (
    
        <div>
          <Navbar  className="navbar-fluid messageCreater" color="info" light expand="md">
          <Container>
                <NavLink className=" text-dark" target= "blank" href="https://saud-resume.netlify.com"> Meet the developer </NavLink>
                <NavLink className="text-dark"  href="/about"> About event manager </NavLink>

            </Container>
          </Navbar>
        </div>
    
);



export default Footer;