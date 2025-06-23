import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-scroll';

import ProfilePic from '../assets/images/ProfilePic.jpg';
import { navLinksdata } from '../constants/index';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full xl:px-10 px-6 py-2 sticky top-0 z-50 bg-[#ffffffe8] backdrop-blur-xl border-b border-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center font-titleFont">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src={ProfilePic}
            alt="logo"
            className="w-10 xl:w-[50px] rounded-full shadow-md border-2 border-white"
          />
          <p className="text-xl font-semibold uppercase tracking-wide text-gray-800 font-bodyFont">
            Verma
          </p>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden mdl:flex items-center gap-6 lg:gap-8">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="relative group text-sm font-medium text-gray-700 transition-all duration-300 cursor-pointer"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="group-hover:text-[#ff014f] transition"
              >
                {title}
              </Link>
              {/* Bottom Border Hover Effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff014f] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="mdl:hidden text-xl bg-white/20 text-[#ff014f] backdrop-blur p-2 rounded-full border border-white/30 shadow-md cursor-pointer transition"
        >
          <FiMenu />
        </span>

        {/* Mobile Menu Panel */}
        {showMenu && (
          <div className="w-[80%] h-screen absolute top-0 left-0 bg-white/90 backdrop-blur-lg p-6 z-50 shadow-xl transition">
            <div className="flex flex-col gap-6 relative">
              {/* Profile Image */}
              <div>
                <img
                  className="w-[50px] rounded-full"
                  src={ProfilePic}
                  alt="logo"
                />
              </div>

              {/* Nav Links */}
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-gray-700 hover:text-[#ff014f] text-base tracking-wide font-medium transition"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Icons */}
              <div className="flex flex-col gap-4 pt-4">
                <h2 className="text-sm uppercase font-semibold text-gray-500">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, index) => (
                    <span
                      key={index}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur border border-white/30 text-[#ff014f] hover:bg-[#ff014f] hover:text-white transition duration-300"
                    >
                      <Icon />
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-[#ff014f] transition cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
