import React from "react";
import SkillCards from "./SkillCards";

function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center mb-2 md:mb-25 px-2 md:px-10 "
    >
      <div>
        <h1 className="font-bold text-3xl md:text-5xl mb-5 md:mb-20  text-gray-800">
          MY SKILLS
        </h1>
      </div>

      <div className="flex w-full flex-wrap justify-center md:justify-between  px-2 md:px-10">
        <SkillCards
          Heading={"HTML & CSS"}
          Content={
            "I have cleared all concepts and have a strong command to create beautiful designs."
          }
        />
        <SkillCards
          Heading="JavaScript"
          Content="In JavaScript, I solve complex problems and use it in React. It is very interesting."
        />
        <SkillCards
          Heading="Tailwind & Bootstrap"
          Content="I create beautiful and well-matched UI designs."
        />
        <SkillCards
          Heading="React"
          Content="In React, I combine my JavaScript knowledge with other technologies to build functional and beautiful designs."
        />
      </div>
    </section>
  );
}

export default Skills;
