import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.jpg"

const Carousel = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;