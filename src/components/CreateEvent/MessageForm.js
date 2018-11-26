import React, {Component} from "react";
import {Container, Form, Row, Col, FormGroup, Label, Input,Button,  } from "reactstrap";
import {Redirect} from "react-router-dom";
const axios = require('axios');
const postEventDataUrl = "http://localhost:3001/api/event";

class EventInputData extends Component {

  state={
    event : "",
    sendingHour : "",
    sendingMinutes: "",
    cardUrl: "",
    date: "",
    text: "",
    subject: "",
    to: "",
    from : "",
    html: "",
    error: false,
    redirect: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    axios.post(postEventDataUrl,{
      event: this.state.event,
      sendingHour : this.state.sendingHour,
      sendingMinutes : this.state.sendingMinutes,
      cardUrl : this.state.cardUrl,
      date : this.state.date,
      text : this.state.text,
      subject : this.state.subject,
      to : this.state.to,
      from : this.state.from,
      html : this.state.html
    })
    .then(response => console.log(response))
    .then(this.setState({
      error: false,
      redirect: true

    }))
    .catch(err => this.setState({
        error: true,
        redirect: false
    }))
  }



  render(){
        if (this.state.error === true) 
      { return <Redirect to="/create" /> }
        else if (this.state.redirect === true) {
          return <Redirect to="/events" />
        }
         return (
          <div>
          <Container className=" registerForm  ">
          <Form className="text-white">
            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label >Event Name</Label>
                  <Input type="text" name="event" placeholder="Enter Event name." onChange={this.handleChange} />
    
                  <Label className="mt-3" > Date </Label>
                  <Input type="text" name="date" placeholder=" Enter Date in this format yyyy/mm/dd" 
                  onChange={this.handleChange} />
    
                  <Label className="mt-3">Sender </Label>
                  <Input type="text" name="from" placeholder="Email" 
                  onChange={this.handleChange} />
    
                  <Label for="email" className="mt-3"> Receiver </Label>
                  <Input type="text" name="to" placeholder="person i want to send email" 
                  onChange={this.handleChange} />
            
                  <Label  className="mt-3">Hour</Label>
                  <Input type="text" name="sendingHour"  placeholder="Enter sending hour" 
                  onChange={this.handleChange} />

                  <Label  className="mt-3">Minutes</Label>
                  <Input type="text" name="sendingMinutes" placeholder="Enter Sending minutes" 
                  onChange={this.handleChange} />

                  <Label  className="mt-3">Image Url</Label>
                  <Input type="text" name="cardUrl" placeholder="Event related image - use image fetcher from navbar" 
                  onChange={this.handleChange} />

                  <Label  className="mt-3">Enter Message body</Label>
                  <Input type="textarea" name="text" placeholder="Email message body goes here" 
                  onChange={this.handleChange} />

                  <Label  className="mt-3">Email Subject</Label>
                  <Input type="text" name="subject" placeholder="Email message body goes here" 
                  onChange={this.handleChange} />
    
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





export default EventInputData;