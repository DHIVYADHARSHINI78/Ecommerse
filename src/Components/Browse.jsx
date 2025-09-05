import React from "react";
import casual from "../assets/casual.png";
import gym from "../assets/gym.png";
import formal from "../assets/Formal.png";
import party from "../assets/party.png";

const Browse = () => {
  const categories = [
    { name: "Casual", img: casual },
    { name: "Formal", img: formal },
    { name: "Party", img: party },
    { name: "Gym", img: gym },
  ];

  return (
    <div className="w-full min-h-screen px-2 py-12 bg-gray-100">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-8">
        BROWSE BY DRESS STYLE
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={cat.img}
            
              className="w-full h-64 sm:h-80 md:h-[300px] lg:h-[400px] object-cover"
            />
            <div className="absolute top-3 left-3 bg-white bg-opacity-70 px-4 py-1 rounded-lg font-semibold text-gray-800">
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;