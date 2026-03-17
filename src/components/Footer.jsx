import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
 

  return (
    <footer className="bg-gray-700 mt-10 py-8 text-white flex flex-col items-center justify-center gap-6">
      <div className="font-bold text-[clamp(1rem,4vw,3rem)]">Hasnain_Rada</div>

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
