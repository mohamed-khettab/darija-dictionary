import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pronunciation", label: "Pronounciation" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const responsiveMenu = isMenuOpen && (
    <div className="lg:hidden fixed top-0 right-0 left-0 bottom-0 bg-primary z-50">
      <div className="fixed right-0 px-8 py-4 cursor-pointer">
        <AiOutlineClose
          className="text-4xl cursor-pointer text-white"
          onClick={toggleMenu}
        />
      </div>
      <ul className="flex flex-col items-center justify-center h-full space-y-6">
        {navLinks.map((item) => (
          <li
            key={item.label}
            className="p-3 rounded-lg text-xl font-body text-white hover:bg-hover hover:text-link transition-all duration-200"
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <header className="px-8 py-2 bg-primary">
        <nav className="flex justify-between items-center max-container">
          <div className="flex flex-col items-center">
            <h2 className="text-xl lg:text-4xl text-center font-heading text-white">
              Darija Dictionary
            </h2>
            <p className="text-sm lg:text-xl text-center font-body text-white">
              Explore the World of Moroccan Arabic
            </p>
          </div>

          <div className="lg:hidden">
            <RxHamburgerMenu
              className="text-4xl cursor-pointer text-white"
              onClick={toggleMenu}
            />
          </div>

          <ul className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-6 text-white font-body text-xl">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="p-3 rounded-lg hover:bg-hover hover:text-link transition-all duration-200"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {responsiveMenu}
    </>
  );
};

export default Navbar;
