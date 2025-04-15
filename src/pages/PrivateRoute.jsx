import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roleAllowed }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // 🔒 Si pas connecté ou rôle incorrect, redirige vers login
  if (!token || role !== roleAllowed) {
    return <Navigate to="/login" />;
  }

  // ✅ Sinon, affiche la page demandée
  return children;
};

export default PrivateRoute;