
import React from "react";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Bem-vindo à nossa Home Page!</h1>
        <p className="mt-4 text-lg">Aqui está um conteúdo básico para testar a Navbar com Tailwind CSS.</p>
      </div>
    </div>
  );
}

export default HomePage;
