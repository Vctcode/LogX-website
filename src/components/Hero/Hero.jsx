import React from 'react'
//  Styles
import './Hero.css'

// Component
import Button from '../Button/Button'

// Images
import HeroImg from '../../assets/hero.svg'


export default function Hero() {
    return (
        <div className="hero-section">
            {/* <img src={HerImg} alt="" className='hero-img'/> */}

            <div className='textbox'>
                <h2>We are a Decentralised delivery system</h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem temporibus magnam quo aspernatur reiciendis maiores, laudantium totam repellat sed optio, saepe nam alias voluptates error laborum, nulla voluptate. Facilis, cumque!
                </p>


                <Button />
            </div>

            {/* <div className='box'></div> */}

        </div>
    )
}



