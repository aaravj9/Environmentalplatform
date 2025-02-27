import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/ngo">NGO</Link>
      <Link to="/volunteers">Volunteers</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
};

export default Navbar;