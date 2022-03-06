import React from "react";
import Image from "next/image";

import fl from "../assets/freelancer.png";
import dp from "../assets/dpulz.jpg";
import SkillItem from "./SkillItem";


function Skills() {
  return (
    <div className="container py-20" id="skills">
      <div className="flex flex-col  mx-auto p-2 mr-auto text-blue-50 w-screen">
        {/* Right */}

        <h1 className="text-3xl font-bold self-center text-center text-gray-900 mb-10 w-screen">
          My Skills and Technologies
        </h1>
        <div className="w-3/5 mx-auto">
          <SkillItem name="Creativity" value="90%" />
          <SkillItem name="Adaptability" value="95%" />
          <SkillItem name="Self Learning" value="95%" />
          <SkillItem name="Out of Box Thinking" value="95%" />
          <SkillItem name="Communication Skills" value="85%" />
          <SkillItem name="Presentation Skills" value="70%" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
