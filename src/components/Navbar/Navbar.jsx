import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
//  Styles
import nav from './Navbar.module.css'

// Images
import Logo from '../../assets/LogX.svg'



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isActiveBar, setIsActiveBar] = useState(false);

    const navHandler = () => {
        setIsActiveBar(!isActiveBar)

        setIsOpen(!isOpen)
    }

    return (
        <nav className={nav.navbar}>
            <img
                src={Logo}
                alt="Log-x logo"
                className={nav.logo}
            />
            <ul className={nav.navlist}>
                <li><Link to="/" >Home</Link></li>
                {/* <li><HashLink to="#fts" smooth>Features</HashLink></li> */}
                {/* <li><Link to={"/features"}>Features</Link></li> */}
                <li><Link to={"/demo"}>Demo</Link></li>
                <li><Link to={"/faq"}>FAQ</Link></li>
                <li><HashLink to="#contact" smooth>Contact</HashLink></li>
            </ul>

            <div className={nav.harm__menu} onClick={navHandler}>
                <div className={isActiveBar ? nav.bar__active : nav.bar}></div>
            </div>

            {isOpen &&
                <div className={nav.mobile}>

                    <ul className={nav.mobile__navlist} onClick={navHandler}>
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to={`${"/features"}`}>Features</Link></li> */}
                        <li><Link to={`${"/demo"}`}>Demo</Link></li>
                        <li><Link to={`${"/faq"}`}>FAQ</Link></li>
                        <li><HashLink to={`${"#contact"}`} smooth>Contact</HashLink></li>
                    </ul>
                </div>
            }
        </nav>
    )
}