import React, { useEffect } from "react";
import SkillCards from "./Cards/SkillCards";
import "../App.css";
function Skills() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );
    boxes.forEach((box) => observer.observe(box));
  }, []);
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
          className="box"
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
