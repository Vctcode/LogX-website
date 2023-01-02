import { useEffect } from "react";
import AOS from "aos";

// Styles
import './Button.css'
import 'aos/dist/aos.css';

// Images
import playStoreSvg from '../../assets/googlestore.svg'
import appStoreSvg from '../../assets/applestore.svg'

export default function Button() {
    //useEffect
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="btn-container" data-aos="fade-up"  data-aos-duration="1500" data-aos-easing="ease-in-sine">
            <a href="https://play.google.com/store/apps/details?id=com.logx">
                <img src={playStoreSvg} alt="playstore" />
            </a>

            <a href="https://apps.apple.com/ng/app/log-x-democratizing-logistics/id1633230801">
                <img src={appStoreSvg} alt="appstore" />
            </a>

        </div>
    )
}