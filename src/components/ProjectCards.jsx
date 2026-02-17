import React from "react";

function ProjectCards({ Image, Header, content, githubLink }) {
  return (
    <div className="w-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 flex flex-col">
      <img src={Image} alt={Header} className="w-full h-48 object-cover" />

      <div className="p-5 ">
        <h2 className="text-xl font-bold mb-3 text-white">{Header}</h2>
        <p className="text-gray-300 text-sm">{content}</p>
      </div>

      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-center rounded-lg p-2 m-4 font-semibold duration-300 transition-all hover:text-blue-500"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCards;
