//imoports
import React, {Component,} from "react";
import "isomorphic-fetch";

const timeApiUri = "http://api.timezonedb.com/v2.1/get-time-zone";

let apiKey = process.env.REACT_APP_TIME_API_KEY;
const currentUser =  "http://eventmanager-web-api.herokuapp.com/api/user";


class Clock extends Component {

    componentWillMount(){
        fetch(currentUser , {credentials: 'include'})
        .then(response => response.json())
        .then(data => data.userZone[0].timeZone)
        .then( currentUserTimeZone => this.setState({
            fetchUrl: `${timeApiUri}?key=${apiKey}&format=json&by=zone&zone=${currentUserTimeZone}`
        }))
        
         var intervalId =  setInterval(this.fetchTime, 5000);
        //store interval id in state for cleanup
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount () {
        clearInterval(this.state.intervalId);
    }

    state={
        fetchUrl: null,
        h: null,
        m: null,
        isTimeLoaded: false,
        intervalId: null,
        timeZone: null

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