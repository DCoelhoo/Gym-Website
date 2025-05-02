import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="text-white transition-colors duration-200 hover:text-gray-300">
            GymFlex
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white transition-colors duration-200 hover:text-gray-300">
              Gyms By City
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white transition-colors duration-200 hover:text-gray-300"
            >
              Help & Contact
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white transition-colors duration-200 hover:text-gray-300"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to="/userForm"
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
