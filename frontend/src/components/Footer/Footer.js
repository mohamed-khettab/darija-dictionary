import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 md:px-8 py-6 bg-white border-t border-gray-300">
      <div className="max-w-screen mx-auto text-center text-lg md:text-xl font-semibold text-gray-900">
        <a
          href="https://github.com/mohamed-khettab/darija-dictionary"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-3"
        >
          <FaGithub />
          <span>Made by Mohamed Khettab</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;