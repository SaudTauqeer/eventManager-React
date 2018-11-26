import React from "react";
import "./index.css";
//import Components
import Card from "./Card";
import Navbar from "./Navbar";
import Tagline from "./Tagline";
import Footer from "./Footer";
import Clock from "../CreateEvent/Clock";
import Date from "../CreateEvent/Date";

const Index = (props) => (
  <div>
    <Navbar />
    <Tagline />
    <Clock />
    <Date />
    <Card />
    <Footer />
  </div>

);


export default Index;