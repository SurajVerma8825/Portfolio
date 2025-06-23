import React from "react";

const FooterBottom = () => {
  return (
    <div className="w-full py-6 backdrop-blur-xl bg-white/60 border border-white/40  shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-6 transition-all duration-300 text-center border-t border-gray-0">
      <p className="text-gray-500 text-sm">
        © 2024. All rights reserved by{" "}
        <a
          href="https://www.linkedin.com/in/suraj-ver789"
          className="text-[#ff0080] font-medium hover:underline hover:text-[#ff0080] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Suraj Verma
        </a>
      </p>
    </div>
  );
};

export default FooterBottom;
