import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Container
  } from 'reactstrap';


  export default class NavBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar  className="navbar-fluid  " color="info" light expand="md">
          <Container>
            <NavbarBrand className ="text-white" href="/"> Event Reminder </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <NavLink className="ml-auto text-dark" color=""  target ="blank" href="https://github.com/SaudTauqeer/Front-End-EventManager"> Github </NavLink>
                </Collapse>
            </Container>
          </Navbar>
        </div>

      );
    }
  }