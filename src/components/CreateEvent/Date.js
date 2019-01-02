//imports
import React, {Component} from "react";
import "isomorphic-fetch";

const currentUser =  "http://eventmanager-web-api.herokuapp.com/api/user";
const timeApiUri = "http://api.timezonedb.com/v2.1/get-time-zone";
let apiKey = process.env.REACT_APP_TIME_API_KEY;

class Date extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isMounted: false,
          fetchUrl: null,
          year: null,
          month: null,
          day: null,
          isDateLoaded: false,
          intervalId : null
        };
      }
    
    componentDidMount(){
        this.setState({
            isMounted:true
        });
        fetch( currentUser , {credentials: 'include'})
        .then (res => res.json())
        .then(data => data.userZone[0].timeZone)
        .then( currentUserTimeZone => { 
            if (this.state.isMounted){
            this.setState({
                fetchUrl: `${timeApiUri}?key=${apiKey}&format=json&by=zone&zone=${currentUserTimeZone}`
        });

        
      var intervalId =  setInterval(this.fetchDate, 5000);
      this.setState({intervalId: intervalId});
        }
    })

    }



    
    componentWillUnmount () {
        clearInterval(this.state.intervalId);

    }    

        fetchDate = ()=> {
        fetch(this.state.fetchUrl)
        .then(response => response.json())
        .then(data => data.formatted)
        .then(dateTime => {
            let year = dateTime.slice(0, 4);
            let month = dateTime.slice(5, 7);
            let day = dateTime.slice(8, 10); 
            if (this.state.isMounted) {
            //setting state
            this.setState({
                year,
                month,
                day,
                isDateLoaded : true
            });
            }   
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