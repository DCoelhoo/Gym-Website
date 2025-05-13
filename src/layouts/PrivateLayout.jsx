import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';
import NavbarPrivate from '../components/navbarPrivate';
import Footer from '../components/Footer';

function PrivateLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <>
      <NavbarPrivate />
      <main className=" bg-white min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PrivateLayout;
