import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCode,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home", icon: <AiOutlineHome /> },
    { id: "about", label: "About", icon: <AiOutlineUser /> },
    { id: "skills", label: "Skills", icon: <AiOutlineCode /> },
    { id: "projects", label: "Projects", icon: <AiOutlineProject /> },
    { id: "contact", label: "Contact", icon: <AiOutlineMail /> },
  ];

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="font-bold text-2xl">Rada</div>

        <div className="hidden md:flex gap-6">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              className="flex items-center gap-1 cursor-pointer hover:text-blue-400 capitalize"
            >
              {section.icon} {section.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center text-3xl cursor-pointer">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-700 text-center py-4 gap-4">
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;
