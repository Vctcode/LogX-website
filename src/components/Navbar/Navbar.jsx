import React from "react";
//  Styles
import './Navbar.css'

// Images
import Logo from '../../assets/LogX.svg'



export default function Navbar() {
    function toggle() {
        navList.classList.toggle("active")
        console.log("Workinkg button")
    }

    return (
        <div className="navbar">
            <img
                src={Logo}
                alt="Log-x logo"
                className="logo"
            />
            <ul className="navlist">
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="harm-menu" onClick={toggle}>
                <div className="bar"></div>
            </div>
        </div>
    )
}