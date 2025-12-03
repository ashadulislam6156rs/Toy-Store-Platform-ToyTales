import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const ToyCard = ({ sigleToy }) => {

  const { toyId, price, pictureURL, rating, availableQuantity, toyName } =
    sigleToy;

  return (
    <div className="card bg-base-300 w-full shadow-sm p-3 hover:shadow-md hover:scale-97 transition-all duration-700 ease-in">
      <div className="rounded-lg">
        <figure className="h-45 overflow-hidden object-cover">
          <img
            className="rounded-lg h-70 w-full hover:scale-105 transition-all duration-500 ease-out"
            src={pictureURL}
            alt="Shoes"
          />
        </figure>
        <div className="card-body bg-white rounded-lg">
          <h2 className="card-title">{toyName}</h2>
          <p className="text-base font-medium">
            Available: <span className="">{availableQuantity}</span>
          </p>
          <div>
            <div className="text-base text-[#fcf7ff] font-medium">
              <span className="bg-[#258184] px-2 py-1 rounded-full">
                ${price}
              </span>
            </div>
            <div className="flex gap-2 items-center py-2">
              <div className="flex gap-1 items-center text-[#f99d12] text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span>{rating}</span>
            </div>
          </div>
          <div className="card-actions w-full">
            <Link
              to={`/toydetails/${toyId}`}
              className="btn text-white transition-colors duration-700 ease-in-out bg-[#258184] hover:bg-[#0aacb2]  w-full"
            >
              View Details{" "}
              <span className="ml-2">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
