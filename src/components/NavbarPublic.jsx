import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mb-4  bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="text-white transition-colors duration-200 hover:text-gray-300">
            GymX
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/gymsloc" className="text-white transition-colors duration-200 hover:text-gray-300">
              Gyms By City
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white transition-colors duration-200 hover:text-gray-300"
            >
              Help & Contact
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-white transition-colors duration-200 hover:text-gray-300"
            >
              JOIN NOW
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
