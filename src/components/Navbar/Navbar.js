

import React from 'react';
import "./Navbar.css";

const Navbar = props =>

   
   <nav className="navbar fixed-top navbar-dark bg-dark">
   <div className="container">
   <ul><h1><a className="navbar-brand" href="#"></a></h1></ul>
        <ul><h1>Score: <span style={{color: "red"}}>{props.currentScore}</span></h1></ul>
        <ul><h1>{props.message}</h1></ul>
        <ul><h1>High Score: <span style={{color: "red"}}>{props.highScore}</span></h1></ul>
                
    </div>
   </nav>
   



export default Navbar;