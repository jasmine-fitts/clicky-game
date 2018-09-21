import React from 'react';
import "./Navpills.css";

const Navpills = props => (

    <div>


<ul className="nav nav-pills nav-justified">
            <li><a href="/">Big Mouth Clicky Game</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "red"}}>{props.currentScore}</span> | Top Score: {props.highScore}</li>
        </ul>
    </div>
);


export default Navpills;
