import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from "../assets/hero/hero-1.webp";
import hero2 from "../assets/hero/hero-2.webp";
import hero3 from "../assets/hero/hero-3.webp";

const Slider = () => {
  const images = [hero1, hero2, hero3];

  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "70vh" }}
    >
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "70vh" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
