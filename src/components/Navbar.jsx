import React, { useState } from "react";
import { Link } from "react-scroll";
import {

  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { IoMdSunny } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-800/90 text-white fixed w-full z-50 shadow-lg backdrop-blur-lg ">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link
          className="font-bold text-2xl md:text-4xl LinkItem"
          to="home"
          smooth={true}
          duration={500}
        >
          Rada
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              className="  LinkItem capitalize text-xl "
            >
              {section.label}
            </Link>
          ))}
          <Link
            to="contact"
            className="px-5 hover:bg-gray-400 transition-all py-2 rounded-md  cursor-pointer  bg-white text-black font-semibold w-fit"
            smooth={true}
            duration={500}
          >
            Hire Me
          </Link>
        </div>

        <div className="md:hidden flex items-center text-3xl cursor-pointer">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex items-center  flex-col bg-gray-700 text-center py-4 gap-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 cursor-pointer hover:text-blue-400 capitalize text-lg"
            >
              {section.icon} {section.label}
            </Link>
          ))}
          <Link
            to="contact"
            className="px-5 hover:bg-gray-400 transition-all py-2 rounded-md  cursor-pointer  bg-white text-black font-semibold w-fit"
            smooth={true}
            duration={500}
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
