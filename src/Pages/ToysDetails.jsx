import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FaFacebook, FaStar, FaTwitter } from "react-icons/fa";
import Container from "../Container/Container";
import { FaArrowLeftLong, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineComment } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { toast } from "react-toastify";
import ErrorToyNotFound from "../Error/ErrorToyNotFound";

const ToysDetails = () => {
  const { id } = useParams();
  // const { toyData } = useToyData();
  const [singleToy, setSigleToy] = useState(null);

  const toyData = useLoaderData();

  useEffect(() => {
    const toy = toyData.find((toy) => toy.toyId === Number(id));
    setSigleToy(toy);
  }, [toyData, id]);

   const toy = toyData.find((item) => item.toyId === parseInt(id));
   if (!toy) {
     return <ErrorToyNotFound />;
   }

  const {
    price,
    pictureURL,
    description,
    rating,
    sellerName,
    sellerEmail,
    subCategory,
    availableQuantity,
    toyName,
  } = singleToy || {};


  const handleFeedback = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    if (email && name ) {
      toast.success(
        "Thanks for your feedback! 💖 It helps us make ToyTales even more joyful and magical.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          
        }
      );
    }

    e.target.reset();
    
  }

  return (
    <>
      <div className="md:py-10 pt-7">
        <title>Toy Details</title>
        <Container>
          {/* Card */}
          <div>
            <div className="card flex flex-col sm:flex-row gap-10 border-b-2 border-gray-200 pb-4 rounded-none items-center">
              <figure className="md:w-80 h-60 md:h-96 p-3 md:p-0 rounded-lg md:flex-1">
                <img className="rounded-md" src={pictureURL} alt="Shoes" />
              </figure>
              <div className="space-y-3 w-full md:flex-1 px-3 md:px-0">
                <div className="border-b border-gray-200 pb-3">
                  <h2 className="text-3xl font-bold text-[#001931] pb-1">
                    {toyName}
                  </h2>
                  <p className="text-[#627382] text-sm font-semibold">
                    Seller by{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-l to-[#632EE3] from-[#9F62F2]">
                      {sellerName}
                    </span>
                  </p>
                  <h1 className="font-semibold">
                    Email:{" "}
                    <span className="font-normal text-[#627382]">
                      {sellerEmail}
                    </span>
                  </h1>
                </div>
                <div className="space-y-1">
                  <h1 className="font-bold text-2xl">
                    $
                    <span className="text-transparent bg-clip-text bg-linear-to-l to-[#632EE3] from-[#9F62F2]">
                      {price}
                    </span>
                  </h1>
                  <h1 className="font-semibold">
                    Category:{" "}
                    <span className="font-normal text-[#627382]">
                      {subCategory}
                    </span>
                  </h1>
                  <h1 className="font-semibold">
                    Available:{" "}
                    <span className="text-[#627382]">{availableQuantity}</span>
                  </h1>
                  <div className="flex gap-2 items-center">
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
                <div>
                  {/* Socile */}
                  <div className="border-t border-gray-300 py-3 flex gap-3 items-center\">
                    <div>
                      <h1 className="text-transparent bg-clip-text bg-linear-to-l to-[#632EE3] from-[#9F62F2] text-base">
                        Share with friends :
                      </h1>
                    </div>
                    <div className="flex gap-3 items-center text-xl ">
                      <span className="cursor-pointer text-[#0866ff]">
                        <FaFacebook />
                      </span>
                      <span className="cursor-pointer text-[#ce25b5]">
                        <FaSquareInstagram />
                      </span>
                      <span className="cursor-pointer text-[#16a0f2]">
                        {" "}
                        <FaTwitter />
                      </span>
                      <span className="cursor-pointer text-[#40c152]">
                        {" "}
                        <IoLogoWhatsapp />
                      </span>
                    </div>
                  </div>
                  <div>
                    <Link
                      to={"/"}
                      className="bg-[#00D390] text-sm font-medium px-3 py-2 rounded-md text-white transition-all ease-in duration-700 cursor-pointer flex gap-2 items-center justify-center hover:bg-black w-40"
                    >
                      <span>
                        <FaArrowLeftLong />
                      </span>
                      Back To Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift mt-5">
              <label className="tab text-blue-500 text-xl">
                <input type="radio" name="my_tabs_4" />
                <p className="text-xl mr-2">
                  <TbFileDescription />
                </p>
                Description
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-6">
                {description}
              </div>

              {/*  Feedback */}
              <label className="tab text-blue-500 text-xl">
                <input type="radio" defaultChecked name="my_tabs_4" />
                <p className="text-xl mr-2">
                  <MdOutlineComment />
                </p>
                Feedback
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-6">
                <p className="w-4/6">
                  Your feedback makes ToyTales magical! Your email won't be
                  published and stays safe with us-just a few words from you can
                  help us spread more joy.
                </p>
                <form onSubmit={handleFeedback} className="mt-5">
                  <fieldset className="flex flex-col gap-5">
                    {/* Text */}
                    <textarea
                      className="textarea text-gray-400 focus:outline-0 focus:border-[#258184]"
                      name="message"
                      placeholder="Enter Message"
                    ></textarea>
                    {/* Name */}
                    <label className="floating-label w-80">
                      <span>Your Name</span>
                      <input
                        type="name"
                        name="name"
                        placeholder="Name"
                        className="input input-md text-gray-400 focus:outline-0 focus:border-[#258184]"
                        required
                      />
                    </label>
                    {/* Email */}
                    <label className="floating-label w-80">
                      <span>Your Email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="mail@site.com"
                        className="input input-md text-gray-400 focus:outline-0 focus:border-[#258184]"
                        required
                      />
                    </label>
                    <button
                      className={`bg-linear-to-r hover:bg-linear-to-l from-purple-600 to-pink-500  text-base font-medium px-4 py-2 rounded-md text-white transition-all ease-in duration-700 cursor-pointer w-40 hover:bg-black`}
                      type="submit"
                    >
                      Try Now
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ToysDetails;
