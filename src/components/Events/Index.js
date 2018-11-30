import React from "react";

//import components
import Navbar from "./Navbar";
import Footer from "./Footer";
import Events from "./Events";

const Index = () =>(
   <div className="bg-white">
    <Navbar />
        <Events />
    <Footer />
    </div>
);




export default Index;