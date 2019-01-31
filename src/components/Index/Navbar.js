import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";

const googleAuthRoute = "http://eventmanager-web-api.herokuapp.com/auth/google";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  async componentDidMount() {
    await fetch("eventmanager-server.herokuapp.com").then(res => {
      if (res.status === 200) {
        console.log("Node server running");
      } else {
        console.log("Server starting up...");
      }
    });
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar
          className="navbar navbar-expand-lg bg-dark fixed-top"
          dark
          id="mainNav"
        >
          <NavbarBrand className="mr-auto navbar-brand">
            Event Manager{" "}
          </NavbarBrand>
          <NavbarToggler
            className="navbar-toggler navbar-toggler-right"
            onClick={this.toggleNavbar}
            className="mr-2"
          />
          <Collapse isOpen={!this.state.collapsed} id="navbarResponsive" navbar>
            <Nav navbar className="navbar-nav ml-auto">
              <NavItem className="navbar-brand">
                <Button
                  className=" text-white btn btn-lg btn-success"
                  href={googleAuthRoute}
                >
                  Log In
                </Button>
              </NavItem>
              <NavItem className="navbar-brand">
                <Button
                  className=" text-white btn btn-lg btn-info"
                  href={googleAuthRoute}
                >
                  Sign Up
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
