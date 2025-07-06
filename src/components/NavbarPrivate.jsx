import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';

function NavbarPrivate() {
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/dashboard" className="text-white transition-colors duration-200 hover:text-gray-300">
            Área de Cliente
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/lessons" className="text-white transition-colors duration-200 hover:text-gray-300">
              Lessons
            </Link>
          </li>
          <li>
            <Link
              to="/training-plans"
              className="text-white transition-colors duration-200 hover:text-gray-300"
            >
              Training Plans
            </Link>
          </li>
          <li>
            <Link
              to="/nutrition"
              className="text-white transition-colors duration-200 hover:text-gray-300"
            >
              Nutrition
            </Link>
          </li>
          <li>
            <Link
              onClick={logout}
              to={"/"}
              className="text-white transition-colors duration-200 hover:text-gray-300"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarPrivate;
