import React from "react";

// Styles
import s from './Section4.module.css'

// Component
import Button from '../Button/Button'

// Image
// import Mockup from '../../assets/DownloadMockup.svg'
import Mockup2 from '../../assets/Mockup2.svg'

export default function SectionFour() {
    return (
        <div className={s.card}>
            <div className={s.diff}>
                <h4>Choose your delivery mode</h4>

                <div className={s.container}>
                    {Modes.map((mode, index) => {
                        return (
                            <div key={index} className={s.item}>
                                <div className={s.icon}></div>
                                <h6>{mode.header}</h6>
                                <p>{mode.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* <div className={s.stats}>
                <div>
                    <h6>100+</h6>
                    <span>downloads</span>
                </div>

                <div>
                    <h6>100+</h6>
                    <span>downloads</span>
                </div>

                <div>
                    <h6>100+</h6>
                    <span>downloads</span>
                </div>

            </div> */}

            <div className={s.sec__two}>
                <div>
                    <h3>
                        We are onboarding businesses, vendors and SME's for a delightful delivery experience
                    </h3>
                    <div className={s.btn__box}>
                        <Button />
                    </div>
                </div>

                <img className={s.mockup__img} src={Mockup2} alt="mockup" />

            </div>
        </div>
    )
}

const Modes = [
    {
        img: "",
        header: "Walk & Cycle",
        // content: " Are you a traveller or going en-route where a delivery is needed? This category is for you as you can login as a delivery person and get a parcel delivered without owning a vehicle",
    },
    {
        img: "",
        header: "Bike",
        content: "",
    },
    {
        img: "",
        header: "Car",
        content: "",
    },
    {
        img: "",
        header: "Truck",
        content: "",
    },
]