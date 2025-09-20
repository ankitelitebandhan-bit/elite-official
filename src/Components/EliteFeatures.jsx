import React from "react";
import { FaMountain, FaUserTie, FaAddressCard } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaMountain size={80} />,
    title: "Serviced over 20,000",
    subtitle: "Elite Customers",
  },
  {
    icon: <FaAddressCard size={80} />,
    title: "Largest pool of Elite",
    subtitle: "Profiles",
  },
  {
    icon: <FaUserTie size={80} />,
    title: "Dedicated",
    subtitle: "Relationship Manager",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const EliteFeatures = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative bg-[#f1d88d] border-4 ml-3 mr-3 border-[#e3c59f] py-16 px-20 mt-5 mb-5 max-w-6xl md:mx-auto flex flex-col md:flex-row justify-around items-center text-center gap-12 rounded-sm"
    >
      {/* Decorative Corner Borders */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#e3c59f]"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#e3c59f]"></div>

      {/* Features */}
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="text-[#8c4a0d] flex flex-col items-center"
        >
          <div className="text-[#c28d00] mb-4">{feature.icon}</div>
          <h3 className="font-bold  text-2xl">{feature.title}</h3>
          <h3 className="font-bold text-2xl">{feature.subtitle}</h3>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EliteFeatures;
