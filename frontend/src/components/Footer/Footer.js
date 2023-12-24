import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-6">
      <div className="max-container flex justify-center items-center text-white">
        <p className="text-sm lg:text-xl font-body">
          &copy; {new Date().getFullYear()} Darija Dictionary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
