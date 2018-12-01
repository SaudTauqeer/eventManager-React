// imports
import React, {Component} from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css'
const restApi = "http://localhost:3001/api/event";


class Events extends Component {
    state={
        data: [],
        loaded: false,
        err: false
    }

    componentDidMount() {
        fetch(restApi,{
            method: "GET"
        })
        .then(response => response.json())
        .then(eventData => {
            this.setState({
                data: eventData,
                loaded: true
            });
        })
    }
    
    deleteEvent = (props) =>{
         fetch(restApi + "/" + props.original._id, {
             method: "DELETE"
         })
         .then(window.location.reload())
         .catch(err => console.log("err:", err))
    }

    render() {
        const columns = [
            {
                Header: "Date",
                accessor: "date"
            },

            {   
                Header: "Event Name",
                accessor: "event",
                textAlign: "center",
                width: 250
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
                Header: "Subject",
                accessor: "subject"
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
                Header: "Actions",
                filterable: false,
                Cell: props => {
                    return (
                        <button className="btn btn-sm btn-danger" onClick={()=> this.deleteEvent(props) }>Delete</button>
                    );
                    
                }
            }
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
