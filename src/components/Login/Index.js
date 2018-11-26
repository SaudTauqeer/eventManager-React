import React from 'react';
import "./login.css"; 

import { Container } from "reactstrap";
//Import Components
import Navbar from "./Navbar";
import LoginForm from './Form';
import Footer from "./Footer";

const Index = ()=> (
    <div>
    <Navbar />
    <p className="lead text-center display-4 mt-3 text-white">Login</p>
    <LoginForm />
    <Footer />
    </div>   
    
);


export default Index;