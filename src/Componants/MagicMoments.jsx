import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MagicMoments = () => {
  const [feedBacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios("/feedbacks.json").then((res) => {
      setFeedbacks(res.data);
    });
  }, []);

  return (
    <section className="rounded-lg">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="md:text-3xl text-xl font-bold text-center text-[#18181b] pb-3">
          Feedback & Magic Moments
        </h2>
        <p className="text-md text-gray-600 mb-10">
          Real giggles. Real cuddles. Real ToyTales magic
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedBacks.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-700"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-[#258184]">
                {item.name}
              </h3>
              <p className="text-gray-700 italic mt-2">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagicMoments;
