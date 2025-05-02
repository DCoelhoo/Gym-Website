import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Importa as funcionalidades do React Router
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>  {/* Envolves todo o conteúdo da aplicação com o Router */}
      <Routes>
        {/* Define as rotas da aplicação */}
        <Route path="/" element={<Home />} />  {/* Rota para a Home */}
      </Routes>
    </Router>
  );
};

export default App;
