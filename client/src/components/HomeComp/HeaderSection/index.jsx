import React from 'react'
import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const HeaderSection = () => {
  return (
    <section id='header-sec'>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <div className="first-img">
    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" alt="" />
    <div className="content">
        <h4>Floral</h4>
        <h3>Excellent bouquets for you</h3>
    </div>
</div>  </SwiperSlide>
<SwiperSlide> <div className="first-img">
    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg" alt="" />
    <div className="content">
        <h4>Floral</h4>
        <h3>Excellent bouquets for you</h3>
    </div>
</div>  </SwiperSlide>
<SwiperSlide> <div className="first-img">
    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg" alt="" />
    <div className="content">
        <h4>Floral</h4>
        <h3>Excellent bouquets for you</h3>
    </div>
</div>  </SwiperSlide>
      </Swiper>

    </section>
  )
}

export default HeaderSection