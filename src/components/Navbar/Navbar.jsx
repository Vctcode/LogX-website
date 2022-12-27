import { useState } from 'react';
import { Link } from 'react-router-dom';
//  Styles
import nav from './Navbar.module.css'

// Images
import Logo from '../../assets/LogX.svg'



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isActiveBar, setIsActiveBar] = useState(false);
    const [activeLink, setActiveLink] = useState(false);

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
                <li><Link to="#">Features</Link></li>
                <li><Link to={"/learnhow"}>Learn How</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>

            <div className={nav.harm__menu} onClick={navHandler}>
                <div className={isActiveBar ? nav.bar__active : nav.bar}></div>
            </div>

            {isOpen &&
                <div className={nav.mobile}>

                    <ul className={nav.mobile__navlist} onClick={navHandler}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#">Features</Link></li>
                        <li><Link to="/learnhow">Learn How</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
            }
        </nav>
    )
}