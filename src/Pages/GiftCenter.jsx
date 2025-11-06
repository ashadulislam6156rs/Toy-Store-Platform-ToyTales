import React, { useState } from "react";
import Container from "../Container/Container";
import { toast } from "react-toastify";
import { FaGift } from "react-icons/fa";
import GalleryImage from "../Componants/GalleryImage";

const GiftCenter = () => {
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedToy, setSelectedToy] = useState("");
  const toyOptions = [
    "Lego Classic Bricks",
    "Stuffed Teddy Bear",
    "Mini Kitchen Set",
    "Alphabet Puzzle Board",
    "Remote Control Car",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipientName.length > 0) {
      toast.success(
        `Gift sent successfully! 🎁\nWe are preparing ${selectedToy} for ${recipientName} 🎉`
      );
    }
    e.target.reset();
    
  };

  return (
    <div className="py-15 rounded-md">
      <title>Send Gifts</title>
      <Container>
        <section className="bg-linear-to-br from-yellow-50 to-pink-100 pb-16 ">
          {<GalleryImage></GalleryImage>}
          <div className="max-w-xl mt-10 mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold  text-purple-700 mb-6 flex gap-4 items-center justify-center">
              <FaGift />
              Give a gift from ToyTales
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="name"
                placeholder="Enter Recipient Name"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-md"
                required
              />

              <select
                value={selectedToy}
                onChange={(e) => setSelectedToy(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                required
              >
                <option value="">Select a toy</option>
                {toyOptions.map((toy, index) => (
                  <option key={index} value={toy}>
                    {toy}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Write a Delivary Address"
                type="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                rows={3}
              />

              <button
                type="submit"
                className="w-full cursor-pointer bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
              >
                Send Gift
              </button>
            </form>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default GiftCenter;
