//imports
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,Button } from 'reactstrap';
import Clock from "./Clock";
import Date from "./Date";

const logoutRoute = "http://eventmanager-web-api.herokuapp.com/auth/logout";
const currentUser =  "http://eventmanager-web-api.herokuapp.com/api/user";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      isMounted: false,
      collapsed: true,
      currentUser: null,
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
    fetch( currentUser , {credentials: 'include'})
      .then(response => response.json())
        .then((response) => {
            if ( this.state.isMounted ) {
                this.setState( { currentUser: response.username } );
            }
        } ).catch( err => {
          console.log(err);
    });
  }
  
  componentWillUnmount() {
    this.setState({isMounted : false})
}


  toggleNavbar() {
    if (this.state.isMounted){
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  }
  render() {
    return (
      <div >
        <Navbar className= "navbar navbar-expand-lg bg-dark fixed-top" dark id="mainNav">
          <NavbarBrand href="/" className="mr-auto navbar-brand">Event Manager  </NavbarBrand>
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
              <Button className=" text-white btn btn-primary" href="/create"> Create new</Button>
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