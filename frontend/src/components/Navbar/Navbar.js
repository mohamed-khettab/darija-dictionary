import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pronunciation", label: "Pronunciation" },
    { href: "/contact", label: "Contact Us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMenuItems = () => (
    <ul className="font-medium flex flex-col p-4">
      {navLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  const renderHeader = () => (
    <header className="px-4 md:px-8 py-4 md:py-6 bg-white border-b border-gray-300 mb-0">
      <nav className="max-w-screen-xl flex justify-between items-center mx-auto relative">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse z-50">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1704/1704568.png?uid=R132302535&ga=GA1.2.1999323022.1703636222&"
            alt="Tajine Icon"
            className="h-8 w-8"
          />
          <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap text-gray-900">
            Darija Dictionary
          </span>
        </a>

        <div className="md:hidden">
          <RxHamburgerMenu
            className="text-gray-500 w-5 h-5"
            onClick={toggleMenu}
          />
        </div>

        <div className="hidden md:flex md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="py-2 px-3 text-gray-900 hover:text-blue-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );

  const responsiveMenu = isMenuOpen && (
    <div className="fixed top-0 right-0 left-0 bottom-0 bg-white z-10">
      <div className="flex justify-end p-4">
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Close menu</span>
          <AiOutlineClose className="w-5 h-5" />
        </button>
      </div>
      {renderMenuItems()}
    </div>
  );

  return (
    <>
      {renderHeader()}
      {responsiveMenu}
    </>
  );
};

export default Navbar;
