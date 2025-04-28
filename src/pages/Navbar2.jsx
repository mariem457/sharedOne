import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <div className="navbar-gauche">
      <h2>Centre de Transfusion</h2>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/stocks">Stocks</Link></li>
        <li><Link to="/dons">Dons</Link></li>
        <li><Link to="/distribution">Distribution</Link></li>
        <li><Link to="/demandes">Demandes</Link></li>
        <li><Link to="/rendezvous">Rendez-vous</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;

