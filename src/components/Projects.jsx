import React, { useEffect } from "react";
import virtualr from "../assets/virtualr.png";
import task_manager from "../assets/task_manager.png";
import ProjectCards from "./Cards/ProjectCards";
import Courses from "../assets/courses.png";

function Projects() {
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
      id="projects"
      className="flex flex-col items-center text-center px-4 py-12"
    >
      <h1 className="font-bold text-3xl md:text-5xl mb-10 text-gray-800">
        My Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        <ProjectCards
          Image={virtualr}
          Header="Landing Page VirtualR"
          content="
A clean and responsive landing page built with React and Vite using modern frontend practices."
          githubLink="https://virtual-r-phi-teal.vercel.app/"
        />
        <ProjectCards
          Image={Courses}
          imageClass={"w-full p-2"}
          Header="Courses Landing page"
          content="A modren and responsive courses landing page buit using react and tailwind css"
          githubLink="https://react-courses-landing-page.vercel.app/"
        />
        <ProjectCards
          Image={task_manager}
          imageClass={"object-top"}
          Header="Task Manager"
          content="A clean and responsive UI task manager built with React and tailwind, featuring core functionalities"
          githubLink="https://react-task-manager-eta.vercel.app/task"
        />
      </div>

      <a
        href="https://github.com/HasnainKhan5588"
        target="_blank"
        rel="noopener noreferrer"
        className="Btn mt-10"
      >
        View All GitHub Repositories
      </a>
    </section>
  );
}

export default Projects;
