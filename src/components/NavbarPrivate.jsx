import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';

function NavbarPrivate() {
  const navigate = useNavigate();

  // Handle logout using Supabase and redirect
  const logout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Home Link */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/dashboard" className="text-white transition-colors duration-200 hover:text-gray-300">
            Dashboard
          </Link>
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/lessons" className="transition-colors duration-200 hover:text-gray-300">
              Lessons
            </Link>
          </li>
          <li>
            <Link to="/training-plans" className="transition-colors duration-200 hover:text-gray-300">
              Training Plans
            </Link>
          </li>
          <li>
            <Link to="/nutrition" className="transition-colors duration-200 hover:text-gray-300">
              Nutrition
            </Link>
          </li>
          <li>
            {/* Better UX: use a <button> instead of <Link> for logout */}
            <button
              onClick={logout}
              className="transition-colors duration-200 hover:text-gray-300"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarPrivate;
