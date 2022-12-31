import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';



// Styles
import s from './Section4.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

                {/* <div className={s.container}>
                    {Modes.map((mode, index) => {
                        return (
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <div key={index} className={s.item}>
                                        <div className={s.icon}></div>
                                        <h6>{mode.header}</h6>
                                        <p>{mode.content}</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        )
                    })}
                </div> */}

                <div className={s.container}>
                            <div className={s.item}>
                                <div className={s.icon}></div>
                                <h6>Walk & Cycle</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>

                            <div className={s.item}>
                                <div className={s.icon}></div>
                                <h6>Bike</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>

                            <div className={s.item}>
                                <div className={s.icon}></div>
                                <h6>Car</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>

                            <div className={s.item}>
                                <div className={s.icon}></div>
                                <h6>Truck</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>
                </div>

                <div className={s.mobilecontainer}>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        // navigation
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.icon}></div>
                                <h6>Walk & Cycle</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.icon}></div>
                                <h6>Bike</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.icon}></div>
                                <h6>Car</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={s.item}>
                                <div className={s.icon}></div>
                                <h6>Truck</h6>
                                {/* <p>{mode.content}</p> */}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><div className={s.item}>
                    <div className={s.icon}></div>
                    <h6>Legediz</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum.</p>
                </div></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper> */}

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