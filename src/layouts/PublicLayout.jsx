import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarPublic from '../components/NavbarPublic';
import Footer from '../components/Footer';


function PublicLayout() {
  return (
    <>
      <NavbarPublic />
      <main className="container mx-auto px-4 py-6 bg-white min-h-screen">
        <Outlet />
      </main>
        <Footer />
    </>

  );
}

export default PublicLayout;
