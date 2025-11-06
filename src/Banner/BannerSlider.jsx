import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "../Container/Container";
import bnImg1 from "../assets/bannerToy1.png";
import bglogo from "../assets/logo.png";
import bgImg2 from "../assets/toy-2.png";
import bgImg3 from "../assets/toy-3.png";
import bgImg4 from "../assets/toy-4.png";
import bgImg5 from "../assets/toy-5.png";
import { TbHorseToy } from "react-icons/tb";


const BannerSlider = () => {
  return (
    <>
      <Container className={"md:py-10 py-7 px-1"}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full flex justify-center rounded-lg items-center"
        >
          <SwiperSlide>
            <div
              className="w-full h-[250px] md:h-[500px] bg-cover bg-center rounded-lg flex items-center p-5 md:p-20 lg:p-25"
              style={{ backgroundImage: `url(${bnImg1})` }}
            >
              <div className="flex-1"></div>
              <div className="flex-1  md:space-y-4">
                <div className="flex justify-center items-center">
                  <img className="w-10 md:w-45" src={bglogo} alt="" />
                </div>
                <h1 className="md:text-4xl text-base text-center uppercase font-bold text-[#ff0b2c]">
                  Toys Made With Love
                </h1>
                <p className="text-xs md:text-sm font-normal text-center">
                  Buy the horket tury collectibles & oction figures from Tight
                  up frem. Wew her wewp nongs &pothazuctiet from UK. Murke!,
                  Snekwsts. & newd, Stup nathnew!
                </p>
                <div className="text-center mt-2 md:mt-10 flex items-center justify-center">
                  <Link
                    to={"/toys"}
                    className="px-4 md:px-7 w-fit flex gap-2 items-center  py-1.5 md:py-2.5 rounded-md font-semibold text-xs md:text-base bg-[#ff0b2c] text-white hover:bg-teal-500 transition-colors duration-700 ease-in-out"
                  >
                    See Toys{" "}
                    <span>
                      <TbHorseToy />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 2 */}
          <SwiperSlide>
            <div
              className="w-full h-[250px] md:h-[500px] bg-cover bg-center rounded-lg flex items-center p-5 md:p-20 lg:p-25"
              style={{ backgroundImage: `url(${bgImg2})` }}
            >
              <div className="flex-1"></div>
              <div className="flex-1 md:space-y-4">
                <div className="flex justify-center items-center">
                  <img className="w-10 md:w-45" src={bglogo} alt="" />
                </div>
                <h1 className="md:text-4xl text-base text-center uppercase font-bold text-[#ff0b2c]">
                  Magical Toys for Tiny Hands
                </h1>
                <p className="text-xs md:text-sm font-normal text-center">
                  Grab the flippet flinks & jiggly jems from Wobble Town. Zoom
                  the zoodle carts from the land of Snarp! Toodle, Mipmops &
                  Glimmeroo await!
                </p>
                <div className="text-center mt-2 md:mt-10 flex items-center justify-center">
                  <Link
                    to={"/toys"}
                    className="px-4 md:px-7 w-fit flex gap-2 items-center py-1.5 md:py-2.5 rounded-md font-semibold text-xs md:text-base bg-[#ff0b2c] text-white hover:bg-teal-500 transition-colors duration-700 ease-in-out"
                  >
                    See Toys{" "}
                    <span>
                      <TbHorseToy />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 3 */}
          <SwiperSlide>
            <div
              className="w-full h-[250px] md:h-[500px] bg-cover bg-center rounded-lg flex items-center p-5 md:p-20 lg:p-25"
              style={{ backgroundImage: `url(${bgImg3})` }}
            >
              <div className="flex-1"></div>
              <div className="flex-1 md:space-y-4">
                <div className="flex justify-center items-center">
                  <img className="w-10 md:w-45" src={bglogo} alt="" />
                </div>
                <h1 className="md:text-4xl text-base text-center uppercase font-bold text-[#ff0b2c]">
                  Playtime Just Got Wiggly
                </h1>
                <p className="text-xs md:text-sm font-normal text-center">
                  Collect the bouncy blorps & twisty twizzles from Flip’n’Flick.
                  Hug the floofers, stack the snib-snabs, and ride the giggle
                  gliders from the hills of Plinkadoo!
                </p>
                <div className="text-center mt-2 md:mt-10 flex items-center justify-center">
                  <Link
                    to={"/toys"}
                    className="px-4 w-fit flex gap-2 items-center md:px-7 py-1.5 md:py-2.5 rounded-md font-semibold text-xs md:text-base bg-[#ff0b2c] text-white hover:bg-teal-500 transition-colors duration-700 ease-in-out"
                  >
                    See Toys{" "}
                    <span>
                      <TbHorseToy />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 4 */}
          <SwiperSlide>
            <div
              className="w-full h-[250px] md:h-[500px] bg-cover bg-center rounded-lg flex items-center p-5 md:p-20 lg:p-25"
              style={{ backgroundImage: `url(${bgImg4})` }}
            >
              <div className="flex-1"></div>
              <div className="flex-1 md:space-y-4">
                <div className="flex justify-center items-center">
                  <img className="w-10 md:w-45" src={bglogo} alt="" />
                </div>
                <h1 className="md:text-4xl text-base text-center uppercase font-bold text-[#ff0b2c]">
                  Whimsy in Every Wiggle
                </h1>
                <p className="text-xs md:text-sm font-normal text-center">
                  Shop the tippy toppers & clink-clank critters from Jumbleberry
                  Lane. Swoop the snoozle bots, wear the twinkle hats, and build
                  the bonk-a-blocks from the magical town of Quibble!
                </p>
                <div className="text-center mt-2 md:mt-10 flex items-center justify-center">
                  <Link
                    to={"/toys"}
                    className="px-4 md:px-7 w-fit flex gap-2 items-center py-1.5 md:py-2.5 rounded-md font-semibold text-xs md:text-base bg-[#ff0b2c] text-white hover:bg-teal-500 transition-colors duration-700 ease-in-out"
                  >
                    See Toys{" "}
                    <span>
                      <TbHorseToy />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* 5 */}
          <SwiperSlide>
            <div
              className="w-full h-[250px] md:h-[500px] bg-cover bg-center rounded-lg flex items-center p-5 md:p-20 lg:p-25"
              style={{ backgroundImage: `url(${bgImg5})` }}
            >
              <div className="flex-1"></div>
              <div className="flex-1 md:space-y-4">
                <div className="flex justify-center items-center">
                  <img className="w-10 md:w-45" src={bglogo} alt="" />
                </div>
                <h1 className="md:text-4xl text-base text-center uppercase font-bold text-[#ff0b2c]">
                  Crafted for Giggles & Grins
                </h1>
                <p className="text-xs md:text-sm font-normal text-center">
                  Find the wobble wagons & sparkle spinners from Toodlepop. Mix
                  the squiggle paints, cuddle the pufflets, and launch the
                  zoomie bugs from the enchanted shelf of Bloopville!
                </p>
                <div className="text-center mt-2 md:mt-10 flex items-center justify-center">
                  <Link
                    to={"/toys"}
                    className="px-4 md:px-7 w-fit flex gap-2 items-center py-1.5 md:py-2.5 rounded-md font-semibold text-xs md:text-base bg-[#ff0b2c] text-white hover:bg-teal-500 transition-colors duration-700 ease-in-out"
                  >
                    See Toys{" "}
                    <span>
                      <TbHorseToy />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
};

export default BannerSlider;
