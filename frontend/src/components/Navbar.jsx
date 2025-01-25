import React from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">FashionHub</Link>
    </div>
    <ul className="navbar-links">
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar;