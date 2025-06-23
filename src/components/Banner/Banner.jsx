import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen px-4 xl:px-6   flex flex-col-reverse lg:flex-row items-center justify-between gap-4 bg-gradient-to-br from-[#fef3f3] via-[#f6e9ff] to-[#e6fbfc] transition-all duration-500"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
