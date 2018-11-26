import React from 'react';
import {
Row,
Col,
Container
} from 'reactstrap';



const Tagline = props => (
        <div className="jumbotron jumbotron-fluid taglineJumbotron  text-white py-5" >
        <Container>
            <h1 className="display-3"> Never forget an important event. </h1>
            <p className="lead ">Your personal event manager.</p>
        </Container>    
        </div>


);

export default Tagline;