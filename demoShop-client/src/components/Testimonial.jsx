import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = ({testimonials,topSlogan,title}) => {
    return (
        <section className='bg-base-100'>
            <div className=" min-h-screen pt-20 mx-auto w-11/12">
            <div className='lg:w-6/12 md:w-8/12 w-full mx-auto grid gap-2 mb-4'>
                <h2 className='text-gray-400 text-center text-xl font-semibold font-barlow capitalize'>{topSlogan}</h2>
                <h2 className='text-buttonBG text-center text-6xl font-semibold font-barlow capitalize'>{title}</h2>
            </div>
                <div className="grid grid-cols-1 ">
                <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          const image = testimonials[index]?.image;
          return (
            `<span class="${className}" style="background-image: url(${image}); background-size: cover; background-position: center; width: 70px; height: 70px; margin-top:70px; border-radius: 50%; display: inline-block; text-align: center; line-height: 40px;">
            </span>`);
        }
      }}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      style={{
        width: '100%',
        overflow: 'hidden',
      }}
      breakpoints={{
        250: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
      className="py-6 mySwiper"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="card shadow-xl px-6 pt-10 rounded-lg gap-2 my-2 flex-col items-center bg-orange-200">
            <p className="font-bold text-gray-500 mb-2 font-montserrat">Customer Testimonials</p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  className={`mask mask-star-2 ${index < testimonial.rating ? 'bg-buttonBG' : 'bg-gray-300'}`}
                  disabled
                />
              ))}
            </div>
            <p className="text-gray-700 text-center mb-24">{testimonial.testimonial}</p>
          </div>
        </SwiperSlide>
      ))}
                </Swiper>
              </div>
                </div>
        </section>
    );
};

export default Testimonial;