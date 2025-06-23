import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full group flex gap-4 relative">
      {/* Timeline Dot */}


      {/* Card Content */}
      <div className="flex-1 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-6 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-[#ff014f] transition duration-300">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{subTitle}</p>
          </div>
          <div>
            <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md shadow-md">
              {result}
            </span>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">{des}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
