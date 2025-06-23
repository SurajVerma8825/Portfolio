import React from "react";
import myImage from "../../assets/images/bannerImg.png";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-[40%] flex justify-center items-center px-4">
      <div className="relative flex items-center justify-center p-10 lg:px-14 py-16   ">

        {/* Animated Glowing Ring — Only visible behind image */}
        <div className="absolute w-[440px] h-[440px] lg:w-[520px] lg:h-[520px] rounded-full bg-gradient-to-tr from-[#ff0080] via-[#7928ca] to-[#2afadf] animate-spin-slow blur-2xl opacity-30 z-0"></div>

        {/* Static white ring around image */}
        <div className="absolute w-[360px] h-[360px] lg:w-[420px] lg:h-[420px] rounded-full border-[6px] border-white z-10"></div>

        {/* Image with hover effect */}
        <img
          src={myImage}
          alt="Suraj Verma"
          className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] object-cover rounded-full z-20 shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500  cursor-pointer"
        />
      </div>
    </div>
  );
};

export default RightBanner;
