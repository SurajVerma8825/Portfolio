import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { logo4 } from '../../assets';

const Footer = () => {
  return (
    <div className="">
      <div className="grid py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 backdrop-blur-xl bg-white/60 border border-white/40  shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-6 transition-all duration-300">
        {/* Logo & Social */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img
              src={logo4}
              alt="logo"
              className="w-12 h-12 rounded-full shadow-md"
            />
            <h1 className="text-2xl font-bold uppercase tracking-widest text-gray-800">
              Verma
            </h1>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-700 uppercase tracking-wider">
              Find Me On
            </h2>
            <div className="flex gap-4 mt-3">
              <a
                href="https://www.linkedin.com/in/suraj-ver789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-[#ff0080] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <FaLinkedinIn />
                </span>
              </a>
              <a
                href="https://github.com/SurajVerma8825"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-700 to-gray-900 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <FaGithub />
                </span>
              </a>
              <a
                href="https://twitter.com/suraj_ver789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-blue-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <FaTwitter />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#ff0080] uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-gray-700 text-base font-medium">
            {['About', 'Portfolio', 'Services', 'Blog', 'Contact'].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="group relative w-max cursor-pointer hover:text-[#ff0080] transition-colors"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff0080] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-[#ff0080] uppercase tracking-wider mb-4">
            Resources
          </h3>
          <ul className="flex flex-col gap-3 text-gray-700 text-base font-medium">
            {[
              'Authentication',
              'System Status',
              'Terms of Service',
              'Pricing',
              'Over Right',
            ].map((item, idx) => (
              <li
                key={idx}
                className="group relative w-max cursor-pointer hover:text-[#ff0080] transition-colors"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff0080] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h3 className="text-lg font-semibold text-[#ff0080] uppercase tracking-wider mb-4">
            Developers
          </h3>
          <ul className="flex flex-col gap-3 text-gray-700 text-base font-medium">
            {[
              'Documentation',
              'Authentication',
              'API Reference',
              'Support',
              'Open Source',
            ].map((item, idx) => (
              <li
                key={idx}
                className="group relative w-max cursor-pointer hover:text-[#ff0080] transition-colors"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff0080] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
