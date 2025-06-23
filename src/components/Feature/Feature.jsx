import { featuresData } from '../Data';
import Title from '../Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full xl:px-16 px-8 py-8 bg-gradient-to-br from-[#fef3f3] via-[#f6e9ff] to-[#e6fbfc] transition-all duration-500"
    >
      <div className="lgl:block ">
        <Title title="Expertise"  />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10 cursor-pointer pb-8">
        {featuresData.map((item, index) => (
          <Card key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Features;
