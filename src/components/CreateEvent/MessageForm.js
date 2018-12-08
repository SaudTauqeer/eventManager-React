import React, {Component} from "react";
import {Container, Form, Row, Col, FormGroup, Label, Input,Button,  } from "reactstrap";
import {Redirect} from "react-router-dom";
import Alert from "./Alert";


const postEventDataUrl = "http://eventmanager-web-api.herokuapp.com/api/event";
class EventInputData extends Component {
  constructor(props) {
    super(props);


    this.state = {
      isMounted: false,
      status: null,
      error: false,
      day: null,
      month: null,
      year: null,
      event : null,
      sendingHour : null,
      sendingMinutes: null,
      cardUrl: null,
      text: null,
      subject: null,
      to: null,
      from : null,
      redirect: false,
      html :"no html",
      sent: false
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
    fetch(postEventDataUrl,{
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...this.state}),
        credentials: 'include'
      })
      .then(res => {
        if (this.state.isMounted){
          this.setState({
            status : res.status
          });
        }
      }) 
    .catch(err => console.log(err));
  //set error to true if bad request
    
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

      <form>
        <div className="form-row">
        {this.AlertPopUp()}
          <div className="form-group col-md-6">
            <label >Friend name *</label>
            <input name="event" type="text" className="form-control" placeholder="friend name"
            onChange={this.handleChange}
             />
          </div>

          <div className="form-group col-md-6">
            <label >Email Subject * </label>
            <input name="subject" type="text" className="form-control"  placeholder="Happy Birthday Tom!" 
            onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-row">
      <div className="form-group col-md-6">
        <label >Sender Email *</label>
        <input name="from" type="text" className="form-control" placeholder="123@Sender.com"
        onChange={this.handleChange}
        />
      </div>

      <div className="form-group col-md-6">
        <label >Receiver Email * </label>
        <input name="to" type="text" className="form-control"  placeholder="123@Receiver.com" 
        onChange={this.handleChange}
        />
      </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">

          <label >Day *</label>
          <input name="day" type="text" className="form-control" placeholder="00"
          onChange={this.handleChange}
          />
        </div>

        <div className="form-group col-md-4">
          <label >Month * </label>
          <input name="month" type="text" className="form-control"  placeholder="00" 
          onChange={this.handleChange}
          />
        </div>
        <div className="form-group col-md-4">
        <label >Year *</label>
        <input name="year" type="text" className="form-control" placeholder="0000"
        onChange={this.handleChange}
        />
      </div>
        </div>

        <div className="form-row">
        <div className="form-group col-md-2">

          <label >Hour *</label>
          <input name="sendingHour" type="text" className="form-control" placeholder="24-H"
          onChange={this.handleChange}
          />
        </div>
        <div className="form-group col-md-2">

          <label >Minute *</label>
          <input name="sendingMinutes" type="text" className="form-control" placeholder="00"
          onChange={this.handleChange}
          />
        </div>
        <div className="form-group col-md-8">
        <label >Image URL / GIF  </label>
        <input name="cardUrl" type="text" className="form-control"  placeholder="https://image.jpg" 
        onChange={this.handleChange}
        />
      </div>
      </div>
          <div className="form-group">
        <label >Enter Your message *</label>
        <Input type="textarea" name="text" rows={3} placeholder="Hello Tom happy birthday!" 
        onChange={this.handleChange} />
      </div>
        <button type="submit" onClick={this.onSubmit} className="btn btn-primary mt-5">Submit</button>
      </form>
          </div>
        );
       }
    }





export default EventInputData;