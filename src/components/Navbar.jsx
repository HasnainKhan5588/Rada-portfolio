import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, stagger } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
    },
  };

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
            smooth={true}
            duration={500}
            className="px-5 hover:bg-gray-400 transition-all py-2 rounded-md  cursor-pointer  bg-white text-black font-semibold w-fit"
          >
            Hire Me
          </Link>
        </div>

        <div className="md:hidden flex items-center text-3xl cursor-pointer">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.6 }}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.ul
          variants={menuVariants}
          initial="closed"
          animate="open"
          className="md:hidden flex items-center  flex-col bg-gray-700 text-center py-4 gap-4"
        >
          {sections.map((section) => (
            <motion.li key={section.id} variants={itemVariants}>
              <Link
                to={section.id}
                smooth={true}
                duration={500}
                className="flex items-center justify-center gap-2 cursor-pointer hover:text-blue-400 capitalize text-lg"
                onClick={() => setIsOpen(false)}
              >
                {section.icon} {section.label}
              </Link>
            </motion.li>
          ))}
          <motion.li variants={itemVariants}>
            <Link
              onClick={() => setIsOpen(false)}
              to="contact"
              key="contact"
              className="px-5 hover:bg-gray-400 transition-all py-2 rounded-md  cursor-pointer  bg-white text-black font-semibold w-fit"
              smooth={true}
              duration={500}
            >
              Hire Me
            </Link>
          </motion.li>
        </motion.ul>
      )}
    </nav>
  );
}

export default Navbar;
