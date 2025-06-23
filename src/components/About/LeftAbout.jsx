import React from "react";
import { bannerImg2 } from "../../assets/index";

const LeftAbout = () => {
  return (
    <div className="w-full lgl:w-[45%] flex justify-center items-center px-4">
      {/* 👇 overflow-hidden added to prevent scroll jump */}
      <div className="relative w-[520px] h-[520px] overflow-hidde flex items-center justify-center">

        {/* 🔥 Animated Glowing Ring – BEHIND image only */}
        <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-[#ff0080] via-[#7928ca] to-[#2afadf] animate-spin-slow blur-2xl opacity-40 z-0"></div>

        {/* ⚪ Static White Ring Around Image */}
        <div className="absolute w-[420px] h-[420px] rounded-full border-[6px] border-white z-10"></div>

        {/* 🖼️ Main Image */}
        <img
          src={bannerImg2}
          alt="About Banner"
          className="relative w-[380px] h-[380px] object-contain rounded-full z-20 shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default LeftAbout;
