import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../assets/Banner.webp";
import Connect from "../Components/Connect";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={Banner}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <Navbar />

      <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-4 sm:px-6 space-y-4">
        <h1 className="text-pink-500 text-3xl sm:text-5xl font-bold drop-shadow-lg">
          Find Your perfect Match
        </h1>
        <p className="text-white font-bold text-lg sm:text-xl drop-shadow-lg max-w-lg">
          Trusted matrimonial service with thousands of successful matches. We
          connect hearts and build families.
        </p>

        <Connect />
      </div>
    </div>
  );
};

export default HomePage;
