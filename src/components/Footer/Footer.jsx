import ft from './Footer.module.css'
// Images
import Logo from '../../assets/logx-logo.svg'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className={ft.footer}>
            <img
                src={Logo}
                alt="Log-x logo"
                className={ft.footer_logo}
            />

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
                    <h5><Link to={'/features'}>Features</Link></h5>
                    <h5><Link to={'/demo'}>Demo</Link></h5>
                    <h5><Link to={'/faq'}>FAQ</Link></h5>
                </div>

                <div className={ft.side}>
                    <h3>Company</h3>
                    <h5><a href="mailto:contact@logtechx.com">Report Issue</a></h5>
                    <h5><Link to={'/'}>Terms of Serivce</Link></h5>
                    <h5><Link to={'/privacy-policy'}>Privacy policy</Link></h5>
                    <h5><Link to={'/about-us'}>About us</Link></h5>
                </div>

                <div className={ft.side}>
                    <div className={ft.social}>
                    <h3>Follow us:</h3>
                    <div className={ft.social_icon}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    </div>
                </div>

            </div>
            <h6>Copyright © 2022 Log-X. All Rights Reserved.</h6>

        </div>
    )
}