import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FcGallery } from "react-icons/fc";

const GalleryImage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios("/data.json").then((res) => {
      const images = res.data.map((toy) => toy.pictureURL);
      setImages(images);
    });
  }, []);

  const row1 = images.filter((_, i) => i % 2 === 0);
  const row2 = images.filter((_, i) => i % 2 !== 0);

  return (
    <div>
      <section className="bg-pink-50 py-12">
        <div className="mx-auto text-center w-full">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 flex gap-2 items-center justify-center">
            <FcGallery /> ToyTales Gallery
          </h2>
          <p className="text-gray-600 mb-8">
            Real giggles, Real toys, Real moments!
          </p>

          <Marquee pauseOnHover speed={40} className="mb-6">
            {row1.map((url, index) => (
              <div
                key={index}
                className="w-64 h-64 mx-4 overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={url}
                  alt={`ToyTales moment ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Marquee>

          <Marquee pauseOnHover speed={40} direction="right">
            {row2.map((url, index) => (
              <div
                key={index}
                className="w-64 h-64 mx-4 overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={url}
                  alt={`ToyTales moment ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default GalleryImage;
