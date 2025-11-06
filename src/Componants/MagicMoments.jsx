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
    <section className="bg-linear-to-br from-pink-50 to-purple-100 py-16 px-6 rounded-lg">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="md:text-4xl text-xl font-bold text-purple-700 mb-4 italic">
          Feedback & Magic Moments
        </h2>
        <p className="text-lg text-gray-600 mb-10">
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
              <h3 className="text-xl font-semibold text-purple-600">
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
