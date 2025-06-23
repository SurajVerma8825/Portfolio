import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Card = ({ item: { title, des, icon: Icon } }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full h-80 px-6 py-8 rounded-3xl bg-white/60 backdrop-blur-lg border border-white/30 shadow-md group cursor-pointer"
    >
      <div className="flex h-full flex-col justify-between">
        {/* Icon with pop effect */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#ff014f]/10 text-[#ff014f] text-3xl"
        >
          {Icon && <Icon />}
        </motion.div>

        <div className="mt-6 flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-bold text-[#1e2024] group-hover:text-[#ff014f] transition-colors duration-300">
            {title}
          </h2>
          <p className="text-[15px] text-gray-700 leading-relaxed">{des}</p>

          {/* Arrow slide-in on hover */}
          <motion.span
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-2xl text-[#ff014f] mt-2"
          >
            <HiArrowRight />
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
