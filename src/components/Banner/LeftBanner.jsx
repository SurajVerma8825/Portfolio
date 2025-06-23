import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      'Professional Coder.',
      'Frontend Developer.',
      'Backend Developer.',
      'Full Stack Developer.',
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 1500,
  });

  return (
    <div className="w-full lg:w-[60%] flex flex-col gap-10 px-8 py-10 bg-white/60 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl">
      <div className="flex flex-col gap-2">
        <h4 className="text-sm tracking-widest text-[#ff014f] font-semibold uppercase">
          Welcome to my world
        </h4>
        <h1 className="text-5xl font-extrabold text-black leading-tight">
          Hi, I'm <span className="text-[#ff014f]">Suraj Verma</span>
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#ff014f]">
          {text}
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-lg lg:text-xl text-gray-800 leading-relaxed max-w-2xl font-medium tracking-wide">
          <span className="text-[#ff014f] font-semibold">
            I craft seamless digital experiences
          </span>
          with{' '}
          <span className="underline decoration-pink-400 decoration-2">
            clean code
          </span>
          and{' '}
          <span className="italic text-purple-600">meaningful animations</span>.
          <br className="hidden lg:block" />
          As a{' '}
          <span className="font-semibold text-[#7928ca]">
            passionate developer
          </span>
          , I build interfaces that not only{' '}
          <span className="text-black font-semibold">work flawlessly</span>, but
          also <span className="text-blue-600">feel intuitive and alive</span>.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
