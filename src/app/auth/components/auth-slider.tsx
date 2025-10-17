import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const slidesData = [
  {
    title: "Welcome to Health Care App",
    description: "Manage your health seamlessly with trusted professionals.",
  },
  {
    title: "Track Your Progress",
    description: "Keep tabs on your wellness journey anytime, anywhere.",
  },
  {
    title: "Stay Connected",
    description: "Connect with medical experts and receive instant updates.",
  },
];

export default function AuthSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full h-[400px] max-w-[500px]"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col justify-center items-center text-white text-center space-y-3"
        >
          <h2 className="text-3xl font-semibold">{slide.title}</h2>
          <p className="max-w-xs text-sm opacity-80">{slide.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
