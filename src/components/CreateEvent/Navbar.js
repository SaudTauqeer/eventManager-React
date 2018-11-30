import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,Button } from 'reactstrap';
import axios from "axios";

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
            <NavItem className="navbar-brand pt-2">
               { (this.state.currentUser !== null || undefined) ?  `Welcome, ${this.state.currentUser}` : `Loading..` }
              </NavItem>
              <NavItem className="navbar-brand">
              <Button className=" text-white btn btn-lg btn-danger" href={logoutRoute}>Log Out</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}