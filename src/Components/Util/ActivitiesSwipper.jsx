import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from './Slide';
import { Autoplay,Navigation,Pagination,Scrollbar,A11y } from 'swiper';
const ActivitiesSwipper = () => {
  return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            speed={900}
            autoplay={{
                delay:3000,
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => ''}
            onSlideChange={() => ''}
        >
            <SwiperSlide><Slide /></SwiperSlide>
            <SwiperSlide><Slide /></SwiperSlide>
            <SwiperSlide><Slide /></SwiperSlide>
            <SwiperSlide><Slide /></SwiperSlide>
        </Swiper>
   
  )
}

export default ActivitiesSwipper