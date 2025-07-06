import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';
import NavbarPrivate from '../components/NavbarPrivate';
import Footer from '../components/Footer';

function PrivateLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        navigate('/login'); // Redirect to login if not authenticated
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <>
      {/* Authenticated Navbar */}
      <NavbarPrivate />

      {/* Main content area with page routing */}
      <main className="container mx-auto px-4 py-6 bg-white min-h-screen">
        <Outlet />
      </main>

      {/* Footer visible on all private pages */}
      <Footer />
    </>
  );
}

export default PrivateLayout;
