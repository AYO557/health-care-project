import React from "react";
import { slidesData } from "../libs/constants";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const AuthSwiper: React.FC = () => {
  return (
    <Swiper
      autoplay={{ delay: 2000 }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className="h-full text-white text-2xl"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">{slide.title}</h1>
            <p className="text-lg">{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AuthSwiper;
