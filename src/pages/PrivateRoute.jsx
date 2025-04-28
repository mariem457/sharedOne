import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, allowedRoles }) {
  const userRole = localStorage.getItem('userRole');

  // Vérifie que le rôle de l'utilisateur est autorisé
  if (allowedRoles.includes(userRole)) {
    return children;
  }

  // Sinon, redirige vers login
  return <Navigate to="/login" />;
}

export default PrivateRoute;
