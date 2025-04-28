import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, allowedRoles }) {
  const userRole = localStorage.getItem('userRole');

  if (!userRole) {
    // Si pas de rôle, redirige vers login
    return <Navigate to="/login" />;
  }

  if (allowedRoles.includes(userRole)) {
    return children;
  } else {
    // Si l'utilisateur n'a pas le droit
    return <Navigate to="/unauthorized" />;
  }
}

export default PrivateRoute;
