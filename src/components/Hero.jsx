import React from "react";
import HasnainImage from "../assets/Hasnain.jpeg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function Hero() {
  
  const [text] = useTypewriter({
    words: ["React Expert", "Frontend Developer", "UI/UX Enthusiast"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center min-h-screen justify-between gap-10 px-10 py-20 md:py-0"
    >
      <div className="text-center flex items-center md:items-start flex-col gap-4 md:gap-10 md:text-left">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold ">
          Hi, I am Hasnain Rada 👋
        </h1>
        <div>
          <h2 className="text-lgx sm:text-2xl md:text-3xl font-semibold md:mb-4">
            I am a <span className="text-blue-600">{text}</span>
            <Cursor cursorStyle="|" />
          </h2>
          <p className="text-sm sm:text-lg text-gray-700">
            I am a passionate frontend developer focused on building creative
            web experiences.
          </p>
        </div>

        <a
          href="https://github.com/HasnainKhan5588?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="Btn w-full md:w-fit hover:shadow-lg  md:font-semibold"
        >
          View My GitHub
        </a>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src={HasnainImage}
          alt="Hasnain Rada"
          className="w-60 h-60 hover:scale-105 transition-all duration-300 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
