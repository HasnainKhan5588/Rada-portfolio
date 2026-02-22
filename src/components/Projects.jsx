import React from "react";
import githubfinderImage from "../assets/github-finder.png";
import task_manager from "../assets/task_manager.png";
import ProjectCards from "./ProjectCards";
import reactPass from "../assets/react-pass-gen.jpeg";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center text-center px-4 py-12"
    >
      <h1 className="font-bold text-3xl md:text-5xl mb-10 text-gray-800">
        My Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        <ProjectCards
          Image={reactPass}
          Header="React Password Generator"
          content="A secure password generator built with React.js with copy and strength checker features."
          githubLink="https://github.com/HasnainKhan5588/React-Password-Generator"
        />

        <ProjectCards
          Image={task_manager}
          imageClass={"object-top"}
          Header="Task Manager"
          content="A clean and responsive UI task manager built with React and tailwind, featuring core functionalities"
          githubLink="https://github.com/HasnainKhan5588/Anolog-Clock"
        />

        <ProjectCards
          Image={githubfinderImage}
          imageClass={"w-full"}
          Header="GitHub Profile Finder"
          content="A  GitHub profile finder app using GitHub API calls, showing repos and details."
          githubLink="https://github.com/HasnainKhan5588/GitHUb-profile-finder-in-react"
        />
      </div>

      <a
        href="https://github.com/HasnainKhan5588"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block bg-gray-800 hover:bg-gray-600 transition-all duration-300 text-white rounded-lg px-6 py-3 font-bold"
      >
        View All GitHub Repositories
      </a>
    </section>
  );
}

export default Projects;
