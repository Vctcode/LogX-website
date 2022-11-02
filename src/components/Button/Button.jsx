import React from "react";

// Styles
import './Button.css'

// Images
import PlayStore from '../../assets/playstore.png'

export default function Button() {
    return (
        <div className="btn-container">
            <div className='btn'>
                <img src={PlayStore} alt="" />
                <a href="http://">Available now on <span>Google Play</span></a>
            </div>

            <div className='btn'>
                <img src={PlayStore} alt="" />
                <a href="http://">Available now on <span>App store</span></a>
            </div>
        </div>
    )
}