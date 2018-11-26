import React from "react";
import {Container} from "reactstrap";

//import components
import Clock from "./Clock";
import Date from "./Date";
import MessageForm from "./MessageForm";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Index = () =>(
   <div>
   <Navbar />
   <Clock />
    <Container>
        <h1 className="text-white "> Schedule your event message. </h1>
    </Container>
    <Date />
    <MessageForm />


    <Footer />
    </div>
);




export default Index;