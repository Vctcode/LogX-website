import React from "react";

// Styles
import s4 from './SectionFour.module.css'

// Component
import Button from '../Button/Button'

// Image
// import Mockup from '../../assets/DownloadMockup.svg'
import Mockup2 from '../../assets/Mockup2.svg'

export default function SectionFour() {
    return (
        <div className={s4.card}>
            <div className={s4.diff}>
                <h4>Choose your delivery mode</h4>

                <div className={s4.container}>
                    {Modes.map((mode, index) => {
                        return (
                            <div key={index} className={s4.item}>
                                <div className={s4.icon}></div>
                                <h6>{mode.header}</h6>
                                <p>{mode.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* <div className={s4.stats}>
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

            <div className={s4.sec_two}>
                <div>
                    <h3>
                        We are onboarding businesses, vendors and SME's for a delightful delivery experience
                    </h3>
                    <div className={s4.btn_box}>
                        <Button />
                    </div>
                </div>

                <img className={s4.mockup_img} src={Mockup2} alt="mockup" />

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