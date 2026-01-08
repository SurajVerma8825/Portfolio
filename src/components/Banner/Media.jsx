import { FaGithub, FaLinkedinIn, FaReact, FaTwitter } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNodedotjs } from 'react-icons/si';

const Media = () => {
  const iconStyle =
    'w-14 h-14 flex items-center justify-center rounded-xl bg-white/30 backdrop-blur-md border border-white/20 text-2xl text-designColor shadow-md hover:scale-105 hover:text-white hover:bg-designColor transition duration-300';

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-4 flex-wrap px-12">
        {/* Social Links */}
        <div className="flex flex-col gap-3">
          <h2 className="text-sm uppercase font-semibold text-gray-500 text-center">
            Find me in
          </h2>
          <div className="flex gap-4 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/suraj-ver789"
              target="_blank"
              rel="noopener noreferrer"
              className={iconStyle}
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/SurajVerma8825"
              target="_blank"
              rel="noopener noreferrer"
              className={iconStyle}
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/suraj_ver789"
              target="_blank"
              rel="noopener noreferrer"
              className={iconStyle}
              title="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Skills Icons */}
        <div className="flex flex-col gap-3 cursor-pointer">
          <h2 className="text-sm uppercase font-semibold text-gray-500 text-center">
            Best Skill On
          </h2>
          <div className="flex gap-4">
            <div className={iconStyle} title="MongoDB">
              <SiMongodb />
            </div>
            <div className={iconStyle} title="Express.js">
              <SiExpress />
            </div>
            <div className={iconStyle} title="React">
              <FaReact />
            </div>
            <div className={iconStyle} title="Node.js">
              <SiNodedotjs />
            </div>
          </div>
        </div>
      </div>

      {/* Download CV */}
      <div>
        <a
          href="https://drive.google.com/file/d/1uRTjlhMH8o2-TyfIxuPLXriVU0IiFQM4/view?usp=drivesdk"
          download="CV_Suraj.pdf"
        >
          <button className="w-full h-12 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#ff014f] to-[#ff6f61] hover:from-[#ff6f61] hover:to-[#ff014f] transition duration-300 shadow-md">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Media;
