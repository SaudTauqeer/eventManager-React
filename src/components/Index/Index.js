import React from "react";
import "./index.css";
import {Redirect} from "react-router-dom";

//import Components
import Header from "./Header";
import Content from "./Content";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Index = () => (
<div>
<NavBar />
<Header />
<Content />
<Footer />  
</div>
);


export default Index;