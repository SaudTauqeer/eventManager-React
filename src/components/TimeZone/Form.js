import React, {Component} from "react";
import {Container, Form, Row, Col, FormGroup, Label, Input,Button,  } from "reactstrap";
import {Redirect} from "react-router-dom";
const axios = require('axios');
const postEventDataUrl = "http://localhost:3001/api/event";
class FormInput extends Component {

  state={
    timeZone : null,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  onSubmit = e => {
    e.preventDefault();
    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    axios.post(postEventDataUrl, {data: this.state}  ,config)
    .then(window.location.reload())
    .catch(err => console.log(err));
  }



  render(){
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