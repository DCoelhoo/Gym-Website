import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa as funcionalidades do React Router
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Lessons from './pages/Lessons';
import Nutrition from './pages/Nutrition';
import PublicLayout from './layouts/publicLayout';
import PrivateLayout from './layouts/privateLayout';
import TrainingPlans from './pages/TrainingPlans';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      {' '}
      {/* Envolves todo o conteúdo da aplicação com o Router */}
      <Routes>
        {/* Define as rotas da aplicação */}
        <Route element={<PublicLayout />}>
          {' '}
          {/* Layout público */}
          <Route path="/" element={<Home />} /> {/* Rota para a Home */}
          <Route path="/register" element={<Register />} /> {/* Rota para a Home */}
          <Route path="/login" element={<Login />} /> {/* Rota para a Home */}
          <Route path="/contact" element={<Contact />} /> {/* Rota para a Home */}
        </Route>

        <Route element={<PrivateLayout />}>
          {' '}
          {/* Layout privado */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/training-plans" element={<TrainingPlans />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
