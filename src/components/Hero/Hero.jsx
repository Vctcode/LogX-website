import React from 'react'
//  Styles
import hero from './Hero.module.css'

// Component
import Button from '../Button/Button'

// Images
import HeroImg from '../../assets/hero.svg'


export default function Hero() {
    return (
        <div className={hero.hero_section}>
            {/* <img src={HerImg} alt="" className={hero.hero_img}/> */}

            <div className={hero.textbox}>
                <h2>Reach The Nearest Logistics In Your Area</h2>

                <p>
                We are a Decentralised delivery system. Choose the best and nearest logistics personel around you
                </p>


                <Button />
            </div>

            <div className={hero.box}></div>

        </div>
    )
}



