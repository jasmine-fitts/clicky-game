import React from "react";
import "./Header.css";

const Header = props => (
    <div className="jumbotron-fluid">
        <div className="container-fluid">
            <h2 className="display-4">Big Mouth Clicky Game!</h2>
            <h4 className="lead">Click on an image to earn points, but don't click on any more than once!</h4>
        </div>
    </div>
);
export default Header;