// imports
import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import ReactTable from "react-table";
import 'react-table/react-table.css'

const restApi = "http://eventmanager-web-api.herokuapp.com/api/event";


class Events extends Component {
    state={
        data: [],
        loaded: false,
        err: false,
        status: null
    }

    componentDidMount() {
        fetch(restApi, {credentials: 'include'})
        .then(response => response.json())
        .then(eventData => {
            this.setState({
                data: eventData,
                loaded: true,
                status : eventData.status
            });
        })
    }
    
    deleteEvent = (props) =>{
         fetch(restApi + "/" + props.original._id, {
             method: "DELETE",
             credentials: 'include'

         })
         .then(res => {
             //when successfully deleted
             if (res.status === 200) {
                 window.location.reload();
             } 
         })
         .catch(err => console.log("err:", err))
    }

    sentStatus = (props) => {
        console.log(props);
    }

    render() {
        const columns = [
            {
                Header: "Year",
                accessor: "year",
                width: 100
            },
            {
                Header: "Month",
                accessor: "month",
                width: 80
            },
            {
                Header: "Day",
                accessor: "day",
                width: 80
            },
            {   
                Header: "Name",
                accessor: "event",
                textAlign: "center",
                width: 250
            },
            {
                Header: "Subject",
                accessor: "subject"
            },
            {
                Header: "Message",
                accessor: "text"
            },
            {
                Header: "Image URL",
                accessor: "cardUrl"
            },
            {
                Header: "Hour",
                accessor: "sendingHour",
                width: 100
            },
            {
                Header: "Minutes",
                accessor: "sendingMinutes",
                width: 100
            },
            {
                Header: "Receiver email",
                accessor: "to"
            },
            {
                Header: "Sender email",
                accessor: "from"
            },
            {
                Header: "Status",
                width: 100,
                filterable: false,
                    Cell: props => {
                        if (props.original.sent === true){
                            return <span className="text-success"> Sent </span>
                        }else if (props.original.sent === false){
                            return <span className="text-danger"> Pending </span>
                        }
                    }
            },
            {
                Header: "Actions",
                width: 100,
                filterable: false,
                Cell: props => {
                    return (
                        <button className="btn btn-sm btn-danger" onClick={()=> this.deleteEvent(props) }>Delete</button>
                    );
                    
                }
            },

        ];
        
        return (
        <div className="container-fluid pt-5  text-dark lead  text-center ">
            <ReactTable className="pt-5"
            columns={columns}
            data={this.state.data}
            filterable
            NoDataComponent={() => null}
            >
            
            </ReactTable>
        </div>

        );
    }
}
export default Events;
