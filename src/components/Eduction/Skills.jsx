import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiFigma,
  SiCplusplus,
  SiTailwindcss,
} from "react-icons/si";

const SkillBar = ({ name, level, Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
    className="w-full"
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className="text-lg text-[#ff014f]" />
        <p className="text-sm font-medium uppercase text-[#1f2937]">{name}</p>
      </div>
      <span className="text-xs font-semibold text-[#111827]">{level}</span>
    </div>
    <div className="w-full h-3 bg-white/40 mt-2 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: level }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 rounded-full"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Design Skill */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-[#7c3aed] tracking-[3px] uppercase font-semibold">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Design & Dev Skill
          </h2>
        </div>
        <div className="bg-white/60 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex flex-col gap-6">
          <SkillBar name="Figma" level="50%" Icon={SiFigma} />
          <SkillBar name="HTML" level="99%" Icon={FaHtml5} />
          <SkillBar name="CSS" level="90%" Icon={FaCss3Alt} />
          <SkillBar name="JavaScript" level="70%" Icon={FaJs} />
          <SkillBar name="C++" level="65%" Icon={SiCplusplus} />
        </div>
      </div>

      {/* Dev Skill */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 font-titleFont flex flex-col gap-2">
          <p className="text-sm text-[#7c3aed] tracking-[3px] uppercase font-semibold">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Development Skill
          </h2>
        </div>
        <div className="bg-white/60 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex flex-col gap-6">
          <SkillBar name="React" level="99%" Icon={FaReact} />
          <SkillBar name="Tailwind CSS" level="95%" Icon={SiTailwindcss} />
          <SkillBar name="Express.js" level="80%" Icon={SiExpress} />
          <SkillBar name="MongoDB" level="75%" Icon={SiMongodb} />
          <SkillBar name="Node.js" level="90%" Icon={FaNodeJs} />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
