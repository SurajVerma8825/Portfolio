import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-white/40 backdrop-blur-lg border border-white/30 p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex flex-col gap-8 justify-center transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
      <img
        className="w-full h-64 object-cover rounded-xl mb-2 shadow-md"
        src={contactImg}
        alt="contact"
      />
      <div className="flex flex-col gap-4 text-[#1e293b]">
        <h3 className="text-3xl font-bold">Suraj Verma</h3>
        <p className="text-lg text-gray-700">MERN Stack Developer</p>
        {/* <p className="text-sm text-gray-600 leading-relaxed">
          I am a skilled MERN stack developer, proficient in crafting robust web
          solutions. With expertise in MongoDB, Express.js, React, and Node.js,
          I deliver seamless and dynamic applications.
        </p> */}
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Phone:</span> +91 8825151049
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Email:</span>{" "}
          kumarsurajverma6001@gmail.com
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-semibold tracking-wider text-gray-700">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/suraj-ver789"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500 text-white flex items-center justify-center shadow-md hover:shadow-lg">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://github.com/SurajVerma8825"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-900 text-white flex items-center justify-center shadow-md hover:shadow-lg">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://twitter.com/suraj_ver789"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 text-white flex items-center justify-center shadow-md hover:shadow-lg">
              <FaTwitter />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
