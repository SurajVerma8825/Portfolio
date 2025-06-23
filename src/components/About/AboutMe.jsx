import LeftAbout from './LeftAbout';
import RightAbout from './RightAbout';

const AboutMe = () => {
  return (
    <div id="about" className="bg-[#ffffff] py-1">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#1e1e1e] capitalize tracking-wide pb-8 pt-6 overflow-hidden">
        About Me
      </h2>

      <section className="w-full minhsc mx-auto px-4 md:px-8 flex flex-col lgl:flex-row items-center justify-between gap-12">
        <LeftAbout />
        <RightAbout />
      </section>
    </div>
  );
};

export default AboutMe;
