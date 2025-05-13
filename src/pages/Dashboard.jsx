import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';
import NavbarPrivate from '../components/navbarPrivate';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate('/');
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, padding: '1rem' }}>
        <h1>Bem-vindo ao Dashboard</h1>
        <p>Aqui podes ver estatísticas, gerir utilizadores, etc.</p>
      </div>
    </div>
  );
}

export default Dashboard;
