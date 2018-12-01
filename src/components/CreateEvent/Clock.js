//imoports
import React, {Component,} from "react";
import "isomorphic-fetch";
import {Container, Row, Col} from "reactstrap";
let apiKey = process.env.REACT_APP_TIME_API_KEY;

class Clock extends Component {


    
    componentWillMount(){
      var intervalId =  setInterval(this.fetchTime, 2000);
        //store interval id in state for cleanup
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount () {
        clearInterval(this.state.intervalId);
    }
    	
    state={
        fetchUrl: `http://vip.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=Asia/Karachi`,
        h: null,
        m: null,
        isTimeLoaded: false,
        executeTimeHour: this.executeTimeHour,
        executeTimeMinutes:this.executeTimeMinutes,
        intervalId: null

    }

        fetchTime = ()=> {
        fetch(this.state.fetchUrl)
        .then(response => response.json())
        .then(json => json.formatted)
        .then(dateTime => {
            //extracing time from date
            let timeOnly = dateTime.slice(11 , 16);
            let hour = timeOnly.charAt(0) + timeOnly.charAt(1);
            let h = hour;
            let m = timeOnly.charAt(3) + timeOnly.charAt(4);

            //setting update hours and mins in state
                this.setState({ 
                    h,
                    m,
                    isTimeLoaded: true
              });
        })};


    render() {
        return (
            
                <div>
                {(this.state.isTimeLoaded) ? ` Time: ${this.state.h} : ${this.state.m}`: "Time is Loading..." }
                </div>
            
        );
    }
}



        
    
export default Clock;