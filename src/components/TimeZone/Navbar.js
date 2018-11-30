//imports
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,Button } from 'reactstrap';
import axios from "axios";
import Clock from "../CreateEvent/Clock";
import Date from "../CreateEvent/Date";

const logoutRoute = "http://localhost:3001/auth/logout";
const currentUser =  "http://localhost:3001/api/user";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      currentUser: null,
      loaded: false
    };
  }

  componentDidMount() {
    axios.get(currentUser)
    .then(data => this.setState({
      currentUser: data.data,
    }))
}


  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {


    return (
      <div >
        <Navbar className= "navbar navbar-expand-lg bg-dark fixed-top" dark id="mainNav">
          <NavbarBrand className="mr-auto navbar-brand">Event Manager  </NavbarBrand>
          <NavbarToggler className="navbar-toggler navbar-toggler-right" onClick={this.toggleNavbar} className="mr-2" />
          <Collapse  isOpen={!this.state.collapsed} id="navbarResponsive" navbar>
            <Nav navbar className="navbar-nav ml-auto">

            <NavItem className="navbar-brand text-white">
               { (this.state.currentUser !== null || undefined) ?  `Welcome, ${this.state.currentUser}` : `Loading..` }
              </NavItem>

              <NavItem className="navbar-brand">
              <Clock />
              </NavItem>

              <NavItem className="navbar-brand">
              <Date />
              </NavItem>

                <NavItem className="navbar-brand">
              <Button className=" text-white btn btn-info" href="/events"> Saved events</Button>
              </NavItem>

                <NavItem className="navbar-brand">
              <a className=" text-white btn btn-outline-success"  target="blank" href="https://ajax-calls.netlify.com/"> Image fetcher</a>
              </NavItem>

              <NavItem className="navbar-brand">
              <Button className=" text-white btn btn-danger" href={logoutRoute}>Log Out</Button>
              </NavItem>


            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}