const RightAbout = () => {
  return (
    <div className="w-full lgl:w-[55%] flex flex-col gap-6 p-6 lg:p-12 bg-white/60 backdrop-blur-xl border border-white/30 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
      <h1 className="text-2xl lg:text-[26px] font-bold text-[#ff014f] leading-tight tracking-tight">
        MERN Developer crafting clean web apps
      </h1>

      <p className="text-[17px] lg:text-[18px] text-gray-800 leading-[1.8] font-medium tracking-normal mt-2 lg:mt-4 space-y-2">
        I'm <span className="text-[#ff014f] font-semibold">Suraj Kumar</span>,
        an MCA student with a strong foundation in IT and expertise in the{' '}
        <span className="text-[#ff014f] font-semibold">MERN stack</span>. I’ve
        built scalable projects like an e-commerce app, job portal, and food
        delivery platform—each featuring role-based access, real-time updates,
        and seamless UX.
        <br />
        
        My strength lies in{' '}
        <span className="text-[#ff014f] font-semibold">
          full-stack architecture
        </span>
        , <span className="text-[#ff014f] font-semibold">REST APIs</span>, and{' '}
        <span className="text-[#ff014f] font-semibold">clean UI</span>.
        <br />I believe in building fast, secure, and user-focused applications
        that solve real-world problems.
      </p>
    </div>
  );
};

export default RightAbout;
