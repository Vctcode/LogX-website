import { IconContext } from 'react-icons'
// Styles
import ft from './Footer.module.css'

// Images
import Logo from '../../assets/logx-logo.svg'
import { Link } from 'react-router-dom'
import { FiTwitter } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'

export default function Footer() {
    const Year = new Date().getFullYear()
    return (
        <IconContext.Provider value={{ color: '#fff', size: '24px', }}>

            <div className={ft.footer} id="contact">
                <div className={ft.about}>
                    <img
                        src={Logo}
                        alt="Log-x logo"
                        className={ft.footer_logo}
                    />

                    <p>
                        LogX is a platform that links and connects vendors, SMEs and individuals with logistics companies and other third party logisitics service providers in no time. We are duly registered as Log-x Technology LTD. with the corporate affairs commission, Nigeria. (RC: 1831243)
                    </p>
                </div>

                <div className={ft.footer_menu}>
                    <div className={ft.side}>
                        <h3>Contact us:</h3>
                        <a href="mailto:contact@logtechx.com">contact@logtechx.com</a>
                        <a href="tel:+234 810 865 1494">+234 810 865 1494</a>
                        <a href="tel:+234 701 342 3935">+234 701 342 3935</a>
                    </div>

                    <div className={ft.side}>
                        <h3>Product</h3>
                        <h5><Link to={'/'}>Home</Link></h5>
                        {/* <h5><Link to={'/features'}>Features</Link></h5> */}
                        <h5><Link to={'/demo'}>Demo</Link></h5>
                        <h5><Link to={'/faq'}>FAQ</Link></h5>
                    </div>

                    <div className={ft.side}>
                        <h3>Company</h3>
                        <h5><a href="mailto:contact@logtechx.com">Report Issue</a></h5>
                        <h5><Link to={'/privacy-policy'}>Privacy policy</Link></h5>
                        {/* <h5><Link to={'/terms-of-service'}>Terms of Serivce</Link></h5> */}
                        {/* <h5><Link to={'/about-us'}>About us</Link></h5> */}
                    </div>

                    <div className={ft.side}>
                        <div className={ft.social}>
                            <h3>Follow us:</h3>
                            <div className={ft.social_icon}>
                                <a href="https://www.twitter.com/logx_tech"><FiTwitter /></a>
                                <a href="https://www.instagram.com/logx_tech"><FiInstagram /></a>
                                <a href="https://www.linkedin.com/company/logx-tech"> <FiLinkedin /></a>

                            </div>
                        </div>
                    </div>


                </div>
                <h6>Copyright © {Year} Log-X. All Rights Reserved.</h6>

            </div>
        </IconContext.Provider>

    )
}