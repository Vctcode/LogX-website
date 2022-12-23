import './Footer.css'
// Images
import Logo from '../../assets/logx-logo.svg'


export default function Footer() {
    return (
        <div className='footer'>
            <img
                src={Logo}
                alt="Log-x logo"
                className="footer-logo"
            />

            <div className='footer-menu'>
                <div className='side'>
                    <h3>Contact us:</h3>
                    <a href="mailto:logtechx@gmail.com">Logtechx@gmail.com</a>
                    <a href="tel:+234 810 865 1494">+234 810 865 1494</a>
                    <a href="tel:+234 701 342 3935">+234 701 342 3935</a>
                </div>

                <div className='side'>
                    <h3>Product</h3>
                    <h5>Home</h5>
                    <h5>Features</h5>
                    <h5>How to</h5>
                    <h5>FAQ</h5>
                </div>

                <div className='side'>
                    <h3>Company</h3>
                    <h5>Report Issue</h5>
                    <h5>Terms of Serivce</h5>
                    <h5>Privacy policy</h5>
                    <h5>About us</h5>
                </div>

                <div className='side social'>
                    <h3>Follow us:</h3>
                    <div className='social-icon'>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>

            </div>
            <h6>Copyright © 2022 Log-X. All Rights Reserved.</h6>

        </div>
    )
}