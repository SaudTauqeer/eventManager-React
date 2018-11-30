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
          <div>
          <Container className=" registerForm pt-5">
          <Form className="text-white">
            <Row form>
              <Col lg={10}>
                <FormGroup className="pt-5">

                  <Label >Event Name</Label>
                  <Input type="text" name="event" placeholder="Enter Event name." onChange={this.handleChange} />

                </FormGroup>
                <Button className="btn btn-sm btn-success mb-4" onClick={this.onSubmit} >Submit</Button>
                </Col>
                </Row>
          </Form>
        </Container>
          </div>
        );
       }
    }





export default FormInput;