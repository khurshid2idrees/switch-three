import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

import logo1 from '../assets/images/alllogos/logos 600x300/1.png'
import logo2 from '../assets/images/alllogos/logos 600x300/2.png'
import logo3 from '../assets/images/alllogos/logos 600x300/3.png'
import logo4 from '../assets/images/alllogos/logos 600x300/4.png'
import logo5 from '../assets/images/alllogos/logos 600x300/5.png'
import logo6 from '../assets/images/alllogos/logos 600x300/6.png'
import logo7 from '../assets/images/alllogos/logos 600x300/7.png'
import logo8 from '../assets/images/alllogos/logos 600x300/8.png'
import logo9 from '../assets/images/alllogos/logos 600x300/9.png'
import logo10 from '../assets/images/alllogos/logos 600x300/10.png'



export default function LogoSlider() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
   <>
       <h2 class="text-2xl text-gray-900 text-center font-bold md:text-4xl">Who We Are </h2>

      <div className='pt-16 pb-8'>
        
     <Swiper
        slidesPerView={isMobile?1:5}
        spaceBetween={30}
        autoplay ={true} 
        loop={true}
        
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src={logo1}/></SwiperSlide>
        <SwiperSlide><img src={logo2}/></SwiperSlide>
        <SwiperSlide><img src={logo3}/></SwiperSlide>
        <SwiperSlide><img src={logo4}/></SwiperSlide>
        <SwiperSlide><img src={logo5}/></SwiperSlide>
        <SwiperSlide><img src={logo6}/></SwiperSlide>
        <SwiperSlide><img src={logo7}/></SwiperSlide>
        <SwiperSlide><img src={logo8}/></SwiperSlide>
        <SwiperSlide><img src={logo9}/></SwiperSlide>
        <SwiperSlide><img src={logo10}/></SwiperSlide>
       
      
      </Swiper>

      </div>
 
   </>
  )
}
