import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import AOS from 'aos'



// Styles
import s from './Section4.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'aos/dist/aos.css';

// Component
import Button from '../Button/Button'

// Image
import Mockup from '../../assets/DownloadMockup.png'
import Self from '../../assets/self-carriage.png'
import Truck from '../../assets/truck.png'
import Bike from '../../assets/bike.png'
import Car from '../../assets/car.png'
import Cycle from '../../assets/cycle.png'

export default function SectionFour() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className={s.card} data-aos="fade-up" data-aos-duration="2500" data-aos-easing="ease-in-sine">
            <div className={s.diff}>
                <h4>Choose your delivery mode</h4>

                <div className={s.container}>
                    <div className={s.item}>
                        <div className={s.icon}>
                            <img src={Self} alt="mode" />
                        </div>
                        <h6>Self-Carriage</h6>
                        {/* <p>{mode.content}</p> */}
                    </div>

                    <div className={s.item}>
                        <div className={s.icon}>
                            <img src={Cycle} alt="mode" />
                        </div>
                        <h6>Cycle</h6>
                        {/* <p>{mode.content}</p> */}
                    </div>

                    <div className={s.item}>
                        <div className={s.icon}>
                            <img src={Bike} alt="mode" />
                        </div>
                        <h6>Bike</h6>
                        {/* <p>{mode.content}</p> */}
                    </div>

                    <div className={s.item}>
                        <div className={s.icon}>
                            <img src={Car} alt="mode" />
                        </div>
                        <h6>Car</h6>
                        {/* <p>{mode.content}</p> */}
                    </div>

                    <div className={s.item}>
                        <div className={s.icon}>
                            <img src={Truck} alt="mode" />
                        </div>
                        <h6>Truck</h6>
                        {/* <p>{mode.content}</p> */}
                    </div>
                </div>

                <div className={s.mobilecontainer}>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.icon}>
                                    <img src={Self} alt="mode" />
                                </div>
                                <h6>Self-Carriage</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.icon}>
                                    <img src={Cycle} alt="mode" />
                                </div>
                                <h6>Cycle</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.icon}>
                                    <img src={Bike} alt="mode" />
                                </div>
                                <h6>Bike</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.icon}>
                                    <img src={Car} alt="mode" />
                                </div>
                                <h6>Car</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.icon}>
                                    <img src={Truck} alt="mode" />
                                </div>
                                <h6>Truck</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>
                        </SwiperSlide>
                    </Swiper>
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
                    <h3 data-aos="fade-up"  data-aos-duration="1500" data-aos-easing="ease-in-sine">
                        We are onboarding businesses, vendors and SME's for a delightful delivery experience
                    </h3>
                    <div className={s.btn__box}>
                        <Button />
                    </div>
                </div>

                <img className={s.mockup__img} src={Mockup} alt="mockup" data-aos="fade-up"  data-aos-duration="2500" data-aos-easing="linear" />

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