import React from "react";
import {NavLink, Navbar, NavbarBrand, Container, } from "reactstrap";
import "./footer.css";
const Index = ()=> (
    
        <div>
          <Navbar  className="navbar-fluid footer" color="info" light expand="md">
          <Container>
                <NavLink className=" text-dark" target= "blank" href="https://saud-resume.netlify.com"> Meet the developer </NavLink>
                <NavLink className="text-dark"  href="/about"> About event manager </NavLink>

            </Container>
          </Navbar>
        </div>
    
);



export default Index;