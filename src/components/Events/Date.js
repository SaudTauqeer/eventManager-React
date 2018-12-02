//imports
import React, {Component} from "react";
import "isomorphic-fetch";
import axios from "axios";

const currentUser =  "http://localhost:3001/api/user";
let apiKey = process.env.REACT_APP_TIME_API_KEY;

class Date extends Component {
    constructor(props) {
        super(props);
    
        this._source = axios.CancelToken.source();
    
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
        })
        axios.get( currentUser , { cancelToken: this._source.token })
        .then(res => res.data)
        .then(data => data.userZone[0].timeZone)
        .then( currentUserTimeZone => { 
            if (this.state.isMounted){
            this.setState({
            fetchUrl:`http://vip.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${currentUserTimeZone}`
        })
        }
    })
        if (this.state.isMounted) {
            this.setState({intervalId: intervalId});
            var intervalId =  setInterval(this.fetchDate, 2000);
            
        }
      
    }

    
    componentWillUnmount () {
        clearInterval(this.state.intervalId);
        this._source.cancel( 'Operation canceled due component being unmounted.' );
    }    

        fetchDate = ()=> {
        axios.get(this.state.fetchUrl)
        .then(response => response.data)
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
