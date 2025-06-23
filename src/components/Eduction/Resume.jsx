import React, { useState } from "react";
import Title from "../Title";
import Education from "./Education";
import Skills from "./Skills";


const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  return (
    <section
      id="resume"
      className="w-full xl:px-16 px-8   xl:py-14 py-4 xl:border-b-[1px] bg-gradient-to-br from-[#fef3f3] via-[#f6e9ff] to-[#e6fbfc] transition-all duration-500 "
    >

      <div className="w-full flex justify-center">
        <ul className="xl:w-[60%] w-full grid grid-cols-2 xl:gap-0 gap-2 xl:pl-16 xl:pr-16">
          <li
            onClick={() => setEducationData(true) & setSkillData(false)}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => setEducationData(false) & setSkillData(true)}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
             Skills
          </li>


        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
    </section>
  );
};

export default Resume;
