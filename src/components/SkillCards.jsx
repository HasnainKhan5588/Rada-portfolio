import React from "react";

function SkillCards({ Heading, Content }) {
  return (
    <div
      className="w-[90%] md:w-[20vw] mb-5 py-6 px-4 
      flex flex-col items-center justify-center text-center 
      rounded-2xl bg-gray-800 text-white
      shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
    >
      <h1 className="text-[clamp(1rem,2.5vw,1.5rem)] font-bold mb-3 text-white">
        {Heading}
      </h1>
      <p className="text-gray-100 text-sm md:text-base">{Content}</p>
    </div>
  );
}

export default SkillCards;
