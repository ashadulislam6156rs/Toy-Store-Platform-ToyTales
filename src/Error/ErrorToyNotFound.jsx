import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router";
import ErrorImg from "../assets/App-Error.png"

const ErrorToyNotFound = () => {
  return (
    <>
      <title>Error Toy Not Found</title>
      <div className="flex justify-center items-center py-10 pb-20 px-3">
        <div className=" w-full h-full flex justify-between items-center flex-col gap-5">
          <img className="w-50 pt-10" src={ErrorImg} alt="" />
          <h1 className="text[#001931] font-bold text-4xl uppercase">
            OPPS! Toy Not Found.
          </h1>
          <p className="text-[#627382] text-base">
            The Toy you are requesting is not found on your system. Please try
            another Toys.
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
    </>
  );
};

export default ErrorToyNotFound;
