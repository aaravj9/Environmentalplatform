import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NGO from './pages/NGO';
import Volunteers from './pages/Volunteers';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ngo" element={<NGO />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;