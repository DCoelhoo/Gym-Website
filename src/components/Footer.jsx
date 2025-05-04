import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 text-gray-300">
      <div className="footer-content mx-auto flex max-w-6xl flex-col items-center justify-between px-4 md:flex-row">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Gym Website. All rights reserved.
        </p>
        <ul className="footer-links mt-4 flex space-x-4 md:mt-0">
          <li>
            <a href="#about" className="transition hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
