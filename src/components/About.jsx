import React from "react";
import RadaImage from "../assets/Hasnain.jpeg";
function About() {
   const handleGmailClick = () => {
     window.location.href = `mailto:rada629015@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Hasnain,%20I%20would%20like%20to%20contact%20you.`;
   };

   return (
     <section id="about" className="flex justify-center ">
       <div className="text-center  flex flex-col  items-center w-[80%] ">
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
           About Me
         </h1>
         <p className="sm:text-2xl md:text-3xl font-semibold mb-4">I am Rada</p>
         <p className="text-sm sm:text-xl font-semibold tracking-wide text-gray-700">
           a passionate Frontend Developer with 2+ years of experience building
           clean and responsive web applications. I specialize in React.js and
           modern UI frameworks, transforming complex Figma designs into
           high-quality, responsive user interfaces.
         </p>
         <div className="flex gap-4  justify-center md:mt-10 mt-4 w-full">
           <button
             onClick={handleGmailClick}
             target="_blank"
             rel="noopener noreferrer"
             className="w-full md:w-fit Btn "
           >
             Contact Me via Gmail
           </button>
         </div>
       </div>
     </section>
   );
}

export default About;
