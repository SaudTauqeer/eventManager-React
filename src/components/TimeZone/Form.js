import React, {Component} from "react";
import {Container, Form, Row, Col, FormGroup, Label, Input,Button,  } from "reactstrap";
import {Redirect} from "react-router-dom";
const postEventDataUrl = "http://eventmanager-web-api.herokuapp.com/api/zone";
const userDataUrl = "http://eventmanager-web-api.herokuapp.com/api/user";

class FormInput extends Component {

  state={
    timeZoneLength : null,
    status: null,
    isActivated: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

   componentWillMount () {
       fetch(userDataUrl, {credentials: 'include'})
       .then(res => res.json())
       .then(userData => userData.userZone.length)
       .then (timeZoneLength => this.setState({
          timeZoneLength: timeZoneLength,
          isActivated: true
       }));
       
   }

  onSubmit = e => {
    e.preventDefault();
    fetch(postEventDataUrl,{
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      method: 'POST', 
      body: JSON.stringify({...this.state})
    })
      .then(res => this.setState({
        status : res.status,
      }))
    .catch(err => console.log(err));
  }



  render(){
        // first time user redirected to create event page after 201 code.
      if (this.state.status === 201){
        return <Redirect push to="/create" />
      }
      if (this.state.isActivated && this.state.timeZoneLength !==0 ) {
        return <Redirect push to="create" />
      }
         return (
          <header className="masthead">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-7 my-auto">
                <div className="header-content mx-auto">

          <Container className=" registerForm pt-5">
          <Form className="text-white">
            <Row form>
              <Col lg={6}>
                <FormGroup className="pt-5">
                  <Label className="lead">Time Zone</Label>
                  <Input type="text" name="timeZone" placeholder="i.e: Europe/Mariehamn"  onChange={this.handleChange} />
                </FormGroup>
                <Button className="btn btn-md btn-primary mb-4" onClick={this.onSubmit} >Submit</Button>
                </Col>
                </Row>
          </Form>
        </Container>
        <Container>
          <h2>
            Please enter your time zone correctly, 
            as it will show you correct date and time. if not, events will not be sent at given time.
          </h2>
          <ul> 
            <li>
            Please refer to the link below and copy your Time Zone under the "Time Zone" column.
            </li>
            <li>
              <a target="blank" href="https://timezonedb.com/time-zones">
                Time Zones List
              </a>
            </li>
          </ul>
        </Container>
            </div>
              </div>
                </div>
                  </div>
        </header> 
        );
       }
    }





export default FormInput;