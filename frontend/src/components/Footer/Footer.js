import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary py-6">
      <div className="max-container flex justify-center items-center text-white">
        <div className="flex items-center ml-4">
          <a href="https://github.com/mohamed-khettab/darija-dictionary" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaGithub className="mr-2" />
          </a>
          <a href="https://github.com/mohamed-khettab/darija-dictionary" target="_blank" rel="noopener noreferrer" className="text-sm lg:text-xl font-body">Made by Mohamed Khettab</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
