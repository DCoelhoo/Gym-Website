import React from "react";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Bem-vindo à nossa Home Page!</h1>
        <p className="text-lg text-gray-700">Aqui está um conteúdo básico para testar a Navbar com Tailwind CSS.</p>
      </div>
    </div>
  );
}

export default HomePage;
