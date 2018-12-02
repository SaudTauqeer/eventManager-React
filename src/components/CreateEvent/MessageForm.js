import React, {Component} from "react";
import {Container, Form, Row, Col, FormGroup, Label, Input,Button,  } from "reactstrap";
import {Redirect} from "react-router-dom";
import Alert from "./Alert";

const axios = require('axios');
const postEventDataUrl = "http://localhost:3001/api/event";
class EventInputData extends Component {
  constructor(props) {
    super(props);

    this._source = axios.CancelToken.source();

    this.state = {
      isMounted: false,
      status: null,
      error: false,
      event : null,
      sendingHour : null,
      sendingMinutes: null,
      cardUrl: null,
      date: null,
      text: null,
      subject: null,
      to: null,
      from : null,
      redirect: false
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
      }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  onSubmit = e => {
    e.preventDefault();
    //set error to true if bad request
    if (!this.state.error) {
      const config = {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      
      
      axios.post(postEventDataUrl,{data: this.state}  ,config)
      .then( res => {
        if (this.state.isMounted)  {
          this.setState({
            status: res.status
          }); 
        }
        })
      .catch(err => console.log(err));
    }

    if (this.state.status !== 201) {
      if (this.state.isMounted) {
        this.setState({
          error: true
        });
      }}
  }

     AlertPopUp = () => {
      if (this.state.error === true) {
        return  (<Alert />);
      }
    }



  render(){
      // if correct form data then redirect.
    if (this.state.status === 201) {
      return  <Redirect push to="/events" />
      }
         return (
          <div>
          <Container className=" registerForm pt-5">
           {this.AlertPopUp()}
          <Form className="text-white">
            <Row form>
              <Col lg={10}>
                <FormGroup className="pt-5">
                  <Label >Event Name - Required</Label>
                  <Input type="text" name="event" placeholder="Enter Event name." onChange={this.handleChange} />
    
                  <Label> Date - Required </Label>
                  <Input type="text" name="date" placeholder=" Enter Date in this format yyyy/mm/dd" 
                  onChange={this.handleChange} />
    
                  <Label >Sender - Required </Label>
                  <Input type="text" name="from" placeholder="Email" 
                  onChange={this.handleChange} />
    
                  <Label for="email"> Receiver - Required </Label>
                  <Input type="text" name="to" placeholder="person i want to send email" 
                  onChange={this.handleChange} />
            
                  <Label  >Hour - Required</Label>
                  <Input type="text" name="sendingHour"  placeholder="Enter sending hour" 
                  onChange={this.handleChange} />

                  <Label  >Minutes - Required</Label>
                  <Input type="text" name="sendingMinutes" placeholder="Enter Sending minutes" 
                  onChange={this.handleChange} />

                  <Label  >Image Url - Optional </Label>
                  <Input type="text" name="cardUrl" placeholder="Event related image - use image fetcher from navbar" 
                  onChange={this.handleChange} />

                  <Label  >Enter Message body - Required</Label>
                  <Input type="textarea" name="text" placeholder="Email message body goes here" 
                  onChange={this.handleChange} />

                  <Label  >Email Subject - Required</Label>
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