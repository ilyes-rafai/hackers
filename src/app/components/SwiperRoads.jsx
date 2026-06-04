"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function SwiperRoads() {
        const images = [
                "/img/roads/modern-web-frontend.png",

                "/img/roads/office-suite-mastery.png",

                "/img/roads/python-mastery.png",

                "/img/roads/team-coding.png",

                "/img/roads/ui-ux-design.png",

                "/img/roads/web-backend-code.png",

                "/img/roads/web-frontend-core.png",

                "/img/roads/web-hacking.png",
        ];
        return (
                <>
                        <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={false}
                                slidesPerView={2}
                                loop={true}
                                speed={3000}
                                coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                }}
                                autoplay={{
                                        delay: 1,
                                        disableOnInteraction: false,
                                }}
                                breakpoints={{
                                        640: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                        },
                                        768: {
                                                slidesPerView: 4,
                                                spaceBetween: 40,
                                        },
                                        1024: {
                                                slidesPerView: 6,
                                                spaceBetween: 50,
                                        },
                                }}
                                pagination={false}
                                modules={[Autoplay, EffectCoverflow, Pagination]}
                                className="mySwiper"
                        >
                                {images.map((image, i) => (
                                        <SwiperSlide key={i}>
                                                <img className="rounded-lg select-none" src={image} />
                                        </SwiperSlide>
                                ))}
                        </Swiper>
                </>
        );
}
