import React from "react";
import RadaImage from "../assets/Hasnain.jpeg";
function About() {
  return (
   
      <section
        id="about"
        className="flex  md:flex-row  items-center justify-between gap-20 px-10 py-0 md:py-20 "
      >
        <div className="hidden w-[40%] md:flex p-2   justify-center md:justify-end border-5 border-gray-800 rounded-2xl">
          <img
            className=" h-100 w-full object-cover hover:scale-105 transition-all duration-300 rounded-2xl  shadow-lg"
            src={RadaImage}
            alt=""
          />
        </div>
        <div className="text-center md:w-[40%]  flex flex-col md:items-start items-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            About Me
          </h1>
          <p className="sm:text-2xl md:text-3xl font-semibold mb-4">
            I am Rada
          </p>
          <p className="text-lg text-gray-700">
            I am a passionate Frontend Developer who started my web development
            journey in 2022. I specialize in building creative, clean, and
            user-friendly interfaces. I enjoy solving frontend bugs and
            improving UI design. Although I am skilled in Microsoft Office, my
            primary focus is developing modern and responsive websites using the
            latest technologies.
          </p>
          <a
            href="https://github.com/HasnainKhan5588?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white hover:bg-gray-600 transition-all px-5 py-3 mt-4 block w-full mb-20 md:mb-0 md:w-fit  font-semibold cursor-pointer rounded-md"
          >
            Veiw my GitHub
          </a>
        </div>
      </section>
  
  );
}

export default About;
