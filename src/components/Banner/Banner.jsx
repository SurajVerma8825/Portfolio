import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen px-4 xl:px-6   bg-[#f9f9f9] flex flex-col-reverse lg:flex-row items-center justify-between gap-4"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
