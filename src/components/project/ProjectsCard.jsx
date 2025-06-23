import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectsCard = ({ title, des, src, github, liveLink }) => {
  return (
    <div className="w-full p-5 xl:px-8 xl:py-6 rounded-[28px] bg-white/50 backdrop-blur-md border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.1)] group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">

      {/* Scrollable image container */}
      <div className="w-full h-60 rounded-2xl cursor-pointer overflow-y-auto overflow-x-hidden relative group">
        <img
          src={src}
          alt={title}
          className="w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Content */}
      <div className="w-full mt-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-[#ff014f] uppercase tracking-wide">
            {title}
          </h3>
          <div className="flex gap-2">
            <Link to={github} target="_blank" rel="noopener noreferrer">
              <span className="w-9 h-9 flex items-center justify-center bg-white text-[#333] hover:text-[#ff014f] rounded-full border shadow transition-all duration-300">
                <BsGithub />
              </span>
            </Link>
            <Link to={liveLink} target="_blank" rel="noopener noreferrer">
              <span className="w-9 h-9 flex items-center justify-center bg-white text-[#333] hover:text-[#ff014f] rounded-full border shadow transition-all duration-300">
                <FaGlobe />
              </span>
            </Link>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
