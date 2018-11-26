
import React, {Component} from "react";
import "isomorphic-fetch";
import {Container, Row, Col} from "reactstrap";
let apiKey = process.env.REACT_APP_TIME_API_KEY;

class Date extends Component {
    
    componentWillMount(){
        setInterval(this.fetchDate, 10000);
    }
    
    state={
        fetchUrl:`http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=Asia/Karachi`,
        year: null,
        month: null,
        day: null,
        isDateLoaded: false
    }

        fetchDate = ()=> {
        fetch(this.state.fetchUrl)
        .then(response => response.json())
        .then(json => json.formatted)
        .then(dateTime => {
            let year = dateTime.slice(0, 4);
            let month = dateTime.slice(5, 7);
            let day = dateTime.slice(8, 10); 
            //setting state
            this.setState({
                year,
                month,
                day,
                isDateLoaded : true
            });
            
        })};

    render(){
        return (
            <div>
            <Container className="text-white text-center">
            <Row>
                <Col>
                <p className="mb-5">
                <b> {(this.state.isDateLoaded) ? `Date is  ${this.state.year} / ${this.state.month} / ${this.state.day}` : "Date is loading..." }</b>
                </p>
                </Col>
            </Row>
            </Container>
            </div>
            
        );
    }

}
    
export default Date;
