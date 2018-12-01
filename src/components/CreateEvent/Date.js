
import React, {Component} from "react";
import "isomorphic-fetch";
import {Container, Row, Col} from "reactstrap";
let apiKey = process.env.REACT_APP_TIME_API_KEY;

class Date extends Component {
    
    
    componentWillMount(){
      var intervalId =  setInterval(this.fetchDate, 2000);
      this.setState({intervalId: intervalId});
    }

    componentWillUnmount () {
        clearInterval(this.state.intervalId);
    }    
    state={
        fetchUrl:`http://vip.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=Asia/Karachi`,
        year: null,
        month: null,
        day: null,
        isDateLoaded: false,
        intervalId : null
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
             {(this.state.isDateLoaded) ? `Date: ${this.state.year} / ${this.state.month} / ${this.state.day}` : "Date is loading..." }

            </div>
            
        );
    }

}
    
export default Date;
