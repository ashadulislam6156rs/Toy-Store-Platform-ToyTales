import React from "react";
import Container from "../Container/Container";
import img1 from "../assets/brands/amazon.png";
import img2 from "../assets/brands/amazon_vector.png";
import img3 from "../assets/brands/casio.png";
import img4 from "../assets/brands/moonstar.png";
import img5 from "../assets/brands/randstad.png";
import img6 from "../assets/brands/star.png";
import img7 from "../assets/brands/start_people.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// import "./styles.css";


const Brand = () => {
  const images = [img1, img3, img4, img5, img6, img2, img7];


  return (
    <Container>
      <div className="my-5 px-20">
        <h1 className="text-2xl font-bold text-center mb-4">
          We've helped thousands of sales teams
        </h1>
        <div className="flex gap-20 py-5 items-center justify-center">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            
            className="mySwiper"
            modules={[Autoplay]}
            speed={1000}
            allowTouchMove={false}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img className="w-20" src={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </Container>
  );
};

export default Brand;
