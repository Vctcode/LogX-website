import React from 'react'
//  Styles
import hero from './Hero.module.css'

// Component
import Button from '../Button/Button'

// Images
// import HeroImg from '../../assets/hero.svg'
// import HeroImg from '../../assets/hero-mockup.svg';
import HeroImg from '../../assets/hero-mockup.png';



export default function Hero() {
    return (
        <div className={hero.hero_section} id="home">

            <div className={hero.textbox}>
                <h2>We connect you to thousands of logistics service providers near you</h2>

                <p>
                our aim is to democratize logistics, and make it seemless for all parties involved
                </p>


                <Button />
            </div>

            <div className={hero.box}>
                <img src={HeroImg} alt="log-x" />
            </div>

        </div>
    )
}



