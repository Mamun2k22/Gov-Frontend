import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./style.css";
// Import required modules
import { Autoplay } from "swiper/modules";

const CarouselWithMenu = () => {
  return (
    <div className="carousel-container">
      <Swiper
        slidesPerView={1} // Show one image at a time
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // Continue autoplay even after interaction
        }}
        loop={true} // Enable continuous loop
        speed={1000} // Transition speed (1 second)
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/YPPrVG1/e4eb44a9e0554c6403ec701c28d1899c.jpg"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/3S7q1Dy/2e3f42956d908f9ace62d91bffc6fa87.jpg"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/V2ySfK5/chondramohol.jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://file-khulna.portal.gov.bd/files/www.bagerhat.gov.bd/top_banner/cef1681b_1c3a_11e7_8f57_286ed488c766/f156667abb453e6de526f5396a6d5fd3.jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://file-khulna.portal.gov.bd/files/www.bagerhat.gov.bd/top_banner/cd2cf6f1_1c3a_11e7_8f57_286ed488c766/1(1).jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselWithMenu;
