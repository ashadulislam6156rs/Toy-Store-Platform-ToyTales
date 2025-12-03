import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <Container>
        <footer className="footer sm:footer-horizontal text-base-content  py-8 font-WorkSans flex-col flex md:flex-row gap-7 md:gap-20 p-3">
          <nav className="flex-1">
            <h6 className="link no-underline">
              <Link
                to={"/"}
                className="md:text-2xl text-xs font-bold text-[#258184]"
              >
                Toy<span className="text-[#e54768]">Tales</span>
              </Link>
            </h6>
            <p className="text-[#c8c4c4]">
              ToyTales is a vibrant and imaginative platform where the world of
              play comes alive for children. As a local toy store, it offers a
              carefully curated selection of toys tailored to different age
              groups, interests, and learning styles—helping kids grow through
              fun and creativity. ToyTales is more than just a shop; it’s the
              beginning of a story where every toy sparks a new adventure, a new
              lesson, and a new smile. With a commitment to quality, safety, and
              eco-friendly products, ToyTales ensures that parents can trust
              what their children play with. It’s a place where childhood
              becomes colorful, joyful, and unforgettable.
            </p>
          </nav>
          <div className="flex-1 flex md:flex-row flex-col gap-5 md:gap-0 text-white">
            <nav className="flex flex-col gap-2 flex-1">
              <h6 className="footer-title">Information</h6>
              <Link to={"/about-us"} className="link link-hover hover:text-blue-600 transition-colors duration-200">
                About us
              </Link>
              <Link to={"/contact-us"} className="link link-hover hover:text-blue-600 transition-colors duration-200">
                Contact Us
              </Link>
            </nav>
            <nav className="flex-1 pb-3 md:pb-0">
              <div className=" space-y-3">
                <h2 className="footer-title">Our Policy</h2>
                <ul className="flex flex-col space-y-1 text-sm">
                  <li>
                    <a
                      href="/privacy"
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h6 className="footer-title">Social Links</h6>
                <div className="flex gap-3 mt-5">
                  <Link to={"https://www.youtube.com/@codeandspeech"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </Link>
                  <Link
                    to={
                      "https://www.facebook.com/ashadulislam6156rs/"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </footer>
        <footer className="max-w-full mx-auto footer sm:footer-horizontal footer-center border-t border-gray-500 text-white p-3 md:p-4 font-WorkSans">
          <aside>
            <p className="md:text-sm text-xs">
              Copyright © {new Date().getFullYear()} - All right reserved by
              ToyTales
            </p>
          </aside>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
