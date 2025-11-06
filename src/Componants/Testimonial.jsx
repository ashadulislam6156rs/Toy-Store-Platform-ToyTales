import React from "react";
import Container from "../Container/Container";
import { GiBacon } from "react-icons/gi";
import team5 from "../assets/Team_5.jpg"
import team3 from "../assets/Team_3.jpg";
import team6 from "../assets/Team_6.jpg";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
  return (
    <div className="p-1">
      <Container>
        <h1 className="text-2xl md:pb-10 py-5 italic text-[#e54768] text-center font-bold">
          Testimonials
        </h1>
        <div className="flex flex-col md:flex-row md:gap-7 gap-4 items-center bg-[#e2adf9] p-5 md:p-10 rounded-md mb-5">
          <div className="md:p-5 space-y-4 p-2 w-full md:w-fit">
            <h1 className="lg:text-5xl md:text-2xl text-xl font-extrabold text-[#258184]">
              What are <br />
              they saying about us
            </h1>
            <p className="text-6xl hidden md:block text-[#e54768] ">
              <GiBacon />
            </p>
          </div>
          {/* card */}
          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover={true}>
              <div className="md:max-w-md max-w-80 ml-5 mx-auto bg-[#e6f7e6] rounded-xl shadow-md p-6 relative">
                <p className="text-gray-800 text-base italic mb-6">
                  I would be lost without KidzOutfit. I am so pleased with this
                  product. KidzOutfit saved my business. Keep up the excellent
                  work.
                </p>

                <div className="absolute bottom-0 left-10 w-0 h-0 border-t-20 border-t-[#e6f7e6] border-l-20 border-l-transparent border-r-20 border-r-transparent"></div>

                <div className="flex items-center mt-8">
                  <img
                    src={team6}
                    alt="Clara M. Winslow"
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-[#1e3a8a]">
                      Clara M. Winslow
                    </h4>
                    <p className="text-sm text-[#1e3a8a]">Developer</p>
                  </div>
                </div>
              </div>
              {/* 2nd */}
              <div className="md:max-w-md max-w-80 ml-5 mx-auto bg-[#e6f7e6] rounded-xl shadow-md p-6 relative">
                <p className="text-gray-800 text-base italic mb-1 md:mb-6">
                  We've seen amazing results already. I wish I would have
                  thought of it first. KidzOutfit should be nominated for
                  service of the year. Great Job!
                </p>

                <div className="absolute bottom-0 left-10 w-0 h-0 border-t-20 border-t-[#e6f7e6] border-l-20 border-l-transparent border-r-20 border-r-transparent"></div>

                <div className="flex items-center md:mt-8">
                  <img
                    src={team5}
                    alt="Ethan J. Rowland"
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-[#1e3a8a]">
                      Ethan J. Rowland
                    </h4>
                    <p className="text-sm text-[#1e3a8a]">Teacher</p>
                  </div>
                </div>
              </div>
              {/* 3rd */}
              <div className="md:max-w-md max-w-80 ml-5 mx-auto bg-[#e6f7e6] rounded-xl shadow-md p-6 relative">
                <p className="text-gray-800 text-base italic mb-6">
                  If you want real marketing that works and effective
                  implementation - KidzOutfit's got you covered. We have no
                  regrets!
                </p>

                <div className="absolute bottom-0 left-10 w-0 h-0 border-t-20 border-t-[#e6f7e6] border-l-20 border-l-transparent border-r-20 border-r-transparent"></div>

                <div className="flex items-center mt-8">
                  <img
                    src={team3}
                    alt="Lydia R. Bennett"
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-[#1e3a8a]">
                      Lydia R. Bennett
                    </h4>
                    <p className="text-sm text-[#1e3a8a]">Manager</p>
                  </div>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
