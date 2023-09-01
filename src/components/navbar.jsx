import React from "react";
import "./navbar.css"
import react from '../assets/react.svg'


export default function Navbar(){
    return (
        <div className="navbar"> 
            <div className="logo">

            <img src={react} alt="" />
            <h2>ReactFacts</h2>
            </div>
            <p>React Course - Project 1</p>
        </div>
    )
}