import React from "react";

// Styles
import './Button.css'

// Images
import playStoreSvg from '../../assets/googlestore.svg'
import appStoreSvg from '../../assets/applestore.svg'

export default function Button() {
    return (
        <div className="btn-container">
            <a href="https://play.google.com/store/apps/details?id=com.logx">
                <img src={playStoreSvg} alt="playstore" />
            </a>

            <a href="https://apps.apple.com/ng/app/log-x-democratizing-logistics/id1633230801">
                <img src={appStoreSvg} alt="appstore" />
            </a>

        </div>
    )
}