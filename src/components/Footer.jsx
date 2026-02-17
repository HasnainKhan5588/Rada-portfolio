import React from "react";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const navLinks = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaTools /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <footer className="bg-gray-700 mt-10 py-8 text-white flex flex-col items-center justify-center gap-6">
      <div className="font-bold text-[clamp(1rem,4vw,3rem)]">Hasnain_Rada</div>

      <div className="flex items-center flex-wrap gap-6 font-semibold">
        {navLinks.map((section) => (
          <Link
            key={section.id}
            to={section.id}
            smooth={true}
            duration={500}
            className="flex items-center gap-1 cursor-pointer hover:text-gray-400 text-[clamp(0.9rem,2vw,1.5rem)]"
          >
            {section.icon} {section.label}
          </Link>
        ))}
      </div>

      <div className="flex gap-6 flex-wrap font-semibold text-2xl">
        <a
          href="https://github.com/HasnainKhan5588"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/husnain-khan-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/HasnainKhan8875"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaTwitter />
        </a>
        <a
          href="https://web.facebook.com/muhammad.husnain.821414"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaFacebook />
        </a>
      </div>

      <div>
        <p className="text-[clamp(15px,3vw,1.5rem)]">
          © 2026 Hasnain Rada. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
