import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router";
import Error404Img from "../assets/error-404.png"
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const ErrorPage_404 = () => {
  return (
    <div>
      <title>Error 404</title>
      <div className="shadow-md">
        <Navbar></Navbar>
      </div>

      <Container>
        <div className="flex justify-center items-center pb-10 px-3">
          <div className=" w-full h-full flex justify-between items-center flex-col gap-5">
            <img className="w-50 pt-20" src={Error404Img} alt="" />
            <h1 className="text[#001931] font-bold text-4xl uppercase">
              OPPS! Page Not Found.
            </h1>
            <p className="text-[#627382] text-base">
              The page you are looking for is not available.
            </p>
            <Link
              to={"/"}
              className="btn bg-linear-to-l to-[#632EE3] from-[#9F62F2] hover:from-[#632EE3] hover:to-[#9F62F2] text-white"
            >
              <HiOutlineHome />
              Back Home
            </Link>
          </div>
        </div>
      </Container>
      <div className="bg-black max-w-full mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ErrorPage_404;
