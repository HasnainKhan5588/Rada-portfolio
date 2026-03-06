import { useState, useEffect } from "react";

export default function Skill() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(".show");
          }
        });
      },
      { threshold: 0.2 },
    );
    boxes.forEach((box) => {
      observer.observe(box);
    });
  }, []);
  const skills = [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 85 },
    { name: "JavaScript", percent: 75 },
    { name: "React", percent: 70 },
    { name: "Tailwind", percent: 80 },
    { name: "Git", percent: 65 },
  ];

  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skills.map((skill) => skill.percent));
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="bg-white md:py-20">
      <h2 className="font-bold text-3xl text-center md:text-5xl mb-10 text-gray-800">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-2  sm:gap-9 md:gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex box flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-1000"
              style={{
                background: `conic-gradient(white ${progress[index]}%, #1f2937 ${progress[index]}%)`,
              }}
            >
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                {progress[index]}%
              </div>
            </div>

            <p className="text-white mt-4">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
