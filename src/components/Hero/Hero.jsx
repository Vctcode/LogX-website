import React from 'react'
//  Styles
import hero from './Hero.module.css'

// Component
import Button from '../Button/Button'

// Images
// import HeroImg from '../../assets/hero.svg'


export default function Hero() {
    return (
        <div className={hero.hero_section}>

            <div className={hero.textbox}>
                <h2>We connect you to thousands of logistics service providers near you</h2>

                <p>
                our aim is to democratize logistics, and make it seemless for all parties involved
                </p>


                <Button />
            </div>

            <div className={hero.box}></div>

        </div>
    )
}



