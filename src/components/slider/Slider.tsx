"use client"
import styles from "./Slider.module.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

type SliderProps = {
    src: string,
    alt: string
}

function Slider({ images, delay, box}: { images: SliderProps[],delay:number,box:number }) {
    return (
        <>
            <Swiper
                className="mySwiper"
                direction={'vertical'}
                // autoplay={{
                //     delay: delay,
                //     disableOnInteraction: false,
                // }}
                // modules={[Autoplay]}
                style={{gridArea:`box-${box}`}}
            >
                
                {
                    images.map((image) => (
                        <SwiperSlide className={styles.slide}>
                            <img src={image.src} alt={image.alt} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    )
}

export default Slider