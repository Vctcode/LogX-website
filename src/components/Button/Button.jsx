import React from "react";

// Styles
import './Button.css'

// Images
import playStoreSvg from '../../assets/googlestore.svg'
import appStoreSvg from '../../assets/applestore.svg'

export default function Button() {
    return (
        <div className="btn-container">
            <a href="https://google.com">
                <img src={playStoreSvg} alt="" />
            </a>

            <a href="https://google.com">
                <img src={appStoreSvg} alt="" />
            </a>

        </div>
    )
}