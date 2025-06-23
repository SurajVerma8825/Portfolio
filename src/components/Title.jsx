const Title = ({ title, des }) => {
  return (
    <div className="text-center mb-10">
      <h3 className="text-xl text-[#7928ca] font-semibold tracking-wider uppercase">{des}</h3>
      <h2 className="text-4xl font-bold text-[#1e2024] mt-2">{title}</h2>
    </div>
  );
};

export default Title;
