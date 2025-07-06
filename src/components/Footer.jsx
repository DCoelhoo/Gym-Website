import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 text-gray-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 md:flex-row">
        
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Gym Website. All rights reserved.
        </p>

        {/* External Links */}
        <ul className="mt-4 flex space-x-4 md:mt-0">
          <li>
            <a
              href="https://diogocoelhogoncalves.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DCoelhoo"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
