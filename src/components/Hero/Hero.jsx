import { useEffect } from 'react'
import AOS from 'aos'
//  Styles
import hero from './Hero.module.css'
import 'aos/dist/aos.css';

// Component
import Button from '../Button/Button'

// Images
// import HeroImg from '../../assets/hero.svg'
// import HeroImg from '../../assets/hero-mockup.svg';
import HeroImg from '../../assets/hero-mockup.png';



export default function Hero() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className={hero.hero_section} id="home">

            <div className={hero.textbox} data-aos="fade-right" data-aos-duration="1500" data-aos-easing="linear">
                <h2>We connect you to thousands of logistics service providers near you</h2>

                <p>
                our aim is to democratize logistics, and make it seemless for all parties involved
                </p>


                <Button />
            </div>

            <div className={hero.box} data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                <img src={HeroImg} alt="log-x" />
            </div>

        </div>
    )
}



