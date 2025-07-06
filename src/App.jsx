import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Lessons from './pages/Lessons';
import Nutrition from './pages/Nutrition';
import TrainingPlans from './pages/TrainingPlans';
import Contact from './pages/Contact';
import GymsLoc from './pages/GymsLoc';


// Layouts
import PublicLayout from './layouts/publicLayout';
import PrivateLayout from './layouts/privateLayout';

const App = () => {
  return (
    <Router>
      {/* Define application routes */}
      <Routes>

        {/* Public layout and routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gymsloc" element={<GymsLoc/>} />
          {/* Add more public routes as needed */}
        </Route>

        {/* Private layout and authenticated routes */}
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/training-plans" element={<TrainingPlans />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
