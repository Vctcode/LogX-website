import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
//  Styles
import nav from './Navbar.module.css'

// Images
import Logo from '../../assets/LogX.svg'



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isActiveBar, setIsActiveBar] = useState(false);
    const [activeLink, setActiveLink] = useState(false);

    const navHandler = () => {
        // classList.toggle("active")
        // console.log("Workinkg button")
        setIsActiveBar(!isActiveBar)

        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <nav className={nav.navbar}>
            <img
                src={Logo}
                alt="Log-x logo"
                className={nav.logo}
            />
            <ul className={nav.navlist}>
                <li><a href="/" >Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="/learnhow">Learn How</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className={nav.harm__menu} onClick={navHandler}>
                <div className={isActiveBar ? nav.bar__active : nav.bar}></div>
            </div>

            {isOpen &&
                <nav className={nav.mobile}>

                    <ul className={nav.mobile__navlist}>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="/learnhow">Learn How</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            }
        </nav>
    )
}