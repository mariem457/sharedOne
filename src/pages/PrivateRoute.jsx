import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, allowedRoles }) {
  const userRole = localStorage.getItem('userRole');

  // Vérifier si userRole ou allowedRoles n'existent pas
  if (!userRole || !Array.isArray(allowedRoles)) {
    return <Navigate to="/login" />;
  }

  // Vérifier si le userRole est autorisé
  if (allowedRoles.includes(userRole)) {
    return children;
  }

  // Sinon, rediriger vers la page non autorisée ou login
  return <Navigate to="/login" />; // tu peux changer vers "/login" si tu veux
}

export default PrivateRoute;
