import React from "react";

// Styles
import './Bottom.css'

// Component
import Button from '../Button/Button'

// Image
import Mockup from '../../assets/DownloadMockup.svg'
import Mockup2 from '../../assets/Mockup2.svg'

export default function Bottom() {
    return (
        <div className="card">
            <div className="diff">
                <h4>We deliver with a difference</h4>

                <div className="container">
                    <div className="item">
                        <div className="icon"></div>
                        <h6>Walk & Cycle</h6>

                        <p>
                            Are you a traveller or going en-route where a delivery is needed?
                            This category is for you as you can login as a delivery person and get a parcel delivered without owning a vehicle
                        </p>
                    </div>

                    <div className="item">
                        <div className="icon"></div>
                        <h6>Walk & Cycle</h6>

                        <p>
                            Are you a traveller or going en-route where a delivery is needed?
                            This category is for you as you can login as a delivery person and get a parcel delivered without owning a vehicle
                        </p>
                    </div>

                    <div className="item">
                        <div className="icon"></div>
                        <h6>Walk & Cycle</h6>

                        <p>
                            Are you a traveller or going en-route where a delivery is needed?
                            This category is for you as you can login as a delivery person and get a parcel delivered without owning a vehicle
                        </p>
                    </div>

                    <div className="item">
                        <div className="icon"></div>
                        <h6>Walk & Cycle</h6>

                        <p>
                            Are you a traveller or going en-route where a delivery is needed?
                            This category is for you as you can login as a delivery person and get a parcel delivered without owning a vehicle
                        </p>
                    </div>
                </div>
            </div>

            <div className="sec-two">
                <div>
                    <h3>
                        We are onboarding businesses, vendors and SME's for a delightful delivery experience
                    </h3>
                    <div className="btn-box">
                        <Button />
                    </div>
                </div>

                <img className="mockup-img" src={Mockup2} alt="mockup" />

            </div>
        </div>
    )
}