import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarPublic from '../components/NavbarPublic';
import Footer from '../components/Footer';


function PublicLayout() {
  return (
    <>
      <NavbarPublic />
      <main className=" bg-gray-100 min-h-screen">
        <Outlet />
      </main>
        <Footer />
    </>

  );
}

export default PublicLayout;
