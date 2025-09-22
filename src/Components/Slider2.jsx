import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.jpg";

const images = [
  { id: 1, src: image1, alt: "Image 1" },
  { id: 2, src: image2, alt: "Image 2" },
  { id: 3, src: image3, alt: "Image 3" },
  { id: 4, src: image4, alt: "Image 4" },
];
function Slider2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-auto bg-[#fff3ee] flex flex-col justify-center items-center">
      {/* Title */}
      <motion.h1
        className="text-4xl ml-3 mr-3 font-bold text-center italic  text-[#BB4D00] mb-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} // No animation for the title
      >
        Moments of Meaning by Delhi's Elite Renowned Matchmakers
      </motion.h1>

      {/* Image Container */}
      <div className="flex ml-3 mr-3 justify-center gap-16 flex-wrap mt-10 mb-10">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="h-100 ml-3 mr-3 w-80 md:w-60 md:h-60 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0, // Fade in only the current image
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }} // Adjust fade time as needed
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Slider2;
