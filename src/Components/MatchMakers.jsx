// MatchmakersCarousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

import nehagupta from "../assets/neha-gupta.jpg";

const matchmakers = [
  {
    name: "SADA KHAN",
    title: "Sr. Relationship Manager",
    experience: "Exp: 10+ Years",
    image: `${nehagupta}`,
  },
  {
    name: "SONAL RAJPUT",
    title: "Sr. Consultant",
    experience: "Exp: 12+ Years",
    image: `${nehagupta}`,
  },
  {
    name: "NEHA GUPTA",
    title: "Sr. Consultant",
    experience: "Exp: 10+ Years",
    image: `${nehagupta}`,
  },
  {
    name: "SADA KHAN",
    title: "Sr. Relationship Manager",
    experience: "Exp: 10+ Years",
    image: `${nehagupta}`,
  },
  {
    name: "SONAL RAJPUT",
    title: "Sr. Consultant",
    experience: "Exp: 12+ Years",
    image: `${nehagupta}`,
  },
  {
    name: "NEHA GUPTA",
    title: "Sr. Consultant",
    experience: "Exp: 10+ Years",
    image: `${nehagupta}`,
  },
];

const MatchMakersCarousel = () => {
  return (
    <div className="bg-[#fef7ef] py-12 px-4 md:px-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#723800] mb-2">
          Meet Our Matchmakers
        </h2>
        <p className="text-gray-600">
          Meet the outstanding performers in our industry—award-winning team of
          professionals
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="w-full"
      >
        {matchmakers.map((matchmaker, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-yellow-400 rounded-lg p-6 text-center shadow hover:shadow-lg transition duration-300 h-full mx-2">
              <img
                src={matchmaker.image}
                alt={matchmaker.name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-yellow-200 mb-4"
              />
              <h3 className="text-lg font-bold text-[#723800]">
                {matchmaker.name}
              </h3>
              <p className="text-sm text-gray-700">{matchmaker.title}</p>
              <p className="text-sm text-gray-700">{matchmaker.experience}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MatchMakersCarousel;
