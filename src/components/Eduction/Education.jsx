import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education */}
      <div className="lgl:w-1/2 w-full">
        <div className="py-6 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[3px] uppercase">
            2017 - 2026
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e2024]">
            Education Quality
          </h2>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          {[
            {
              title: 'Master Of Computer Application',
              subTitle:
                'Technocrats Institute Of Technology Bhopal (2024 - 2026)',
              result: '0/10',
              des: 'Currently pursuing an MCA at TIT Bhopal (2024-2026), affiliated with RGPV University.',
            },
            {
              title: 'B.Sc in Information Technology',
              subTitle: 'Patliputra University (2020 - 2023)',
              result: '61.9%/100%',
              des: 'Graduated from CIMAGE College, Patna under Patliputra University.',
            },
            {
              title: 'Intermediate',
              subTitle: 'S N Sinha College (2017 - 2019)',
              result: '78.4%/100%',
              des: 'PCM stream under BSEB Board, Aurangabad.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)]
  transition-all duration-300 hover:shadow-[0_12px_45px_rgba(0,0,0,0.2)] hover:scale-[1.02] hover:bg-white/70 hover:border-white/40 cursor-pointer"
            >
              <ResumeCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Job Experience */}
      <div className="lgl:w-1/2 w-full">
        <div className="py-6 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-designColor tracking-[3px] uppercase">
            2020 - 2024
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e2024]">
            Job Experience
          </h2>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          {[
            {
              title: 'Frontend Developer Intern',
              subTitle: 'Brand Monkey (Feb - Apr 2024)',
              result: 'Noida',
              des: 'Worked with React.js in live projects at Brand Monkey, Delhi.',
            },
            {
              title: 'Web Developer Intern',
              subTitle: 'Afame Technologies (Jan 2024)',
              result: 'Virtual',
              des: '30-day virtual internship focusing on web development.',
            },
            {
              title: 'Full Stack Trainee',
              subTitle: 'Zepskill (2022 - 2023)',
              result: 'Virtual',
              des: 'Trained in MERN stack and C++ with mentor guidance.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)]
  transition-all duration-300 hover:shadow-[0_12px_45px_rgba(0,0,0,0.2)] hover:scale-[1.02] hover:bg-white/70 hover:border-white/40 cursor-pointer"
            >
              <ResumeCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
