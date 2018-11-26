import React from "react";
import "./about.css";
//Import Components
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutContent from "./AboutContent";


const Index = () => (
    <div>
    <Navbar />
    <p className="lead text-center display-4 mt-3 text-white">About</p>
    <AboutContent />
    <Footer />
    </div>
);


export default Index;