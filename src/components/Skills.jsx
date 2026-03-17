import { useState, useEffect } from "react";

export default function Skill() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", percent: 70 },
        { name: "JavaScript", percent: 75 },
        { name: "HTML5", percent: 90 },
        { name: "Tailwind CSS", percent: 80 },
        { name: "Bootstrap", percent: 75 },
      ],
    },
    {
      title: "Tools & Libraries",
      skills: [
        { name: "Framer Motion", percent: 65 },
        { name: "Git & GitHub", percent: 70 },
        { name: "Figma to Code", percent: 75 },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Responsive Design", percent: 90 },
        { name: "Performance Optimization", percent: 70 },
        { name: "AI Tools", percent: 80 },
        { name: "SEO", percent: 65 },
      ],
    },
  ];

  const [progress, setProgress] = useState(
    skillGroups.map((group) => group.skills.map(() => 0)),
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(
        skillGroups.map((group) => group.skills.map((skill) => skill.percent)),
      );
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="bg-white md:py-20 px-4">
      <h2 className="font-bold text-3xl text-center md:text-5xl mb-10 text-gray-800">
        My Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, gIndex) => (
          <div
            key={gIndex}
            className="bg-gray-900 p-6 rounded-xl shadow-lg 
transition-all duration-300 
hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
hover:ring-2 hover:ring-white/20"
          >
            <h3 className="text-white text-lg md:text-2xl font-semibold mb-6 text-center">
              {group.title}
            </h3>

            {group.skills.map((skill, sIndex) => (
              <div key={sIndex} className="mb-4">
                <div className="flex justify-between text-white text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{progress[gIndex][sIndex]}%</span>
                </div>

                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className="bg-white h-2 rounded transition-all duration-1000"
                    style={{
                      width: `${progress[gIndex][sIndex]}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}