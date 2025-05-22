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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="text-white transition-colors duration-200 hover:text-gray-300">
            Área de Cliente
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white transition-colors duration-200 hover:text-gray-300">
              Aulas
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-white transition-colors duration-200 hover:text-gray-300"
            >
              Planos de Treino
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white transition-colors duration-200 hover:text-gray-300"
            >
              Nutrição
            </Link>
          </li>
          <li>
            <Link
              to="/"
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
