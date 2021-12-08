import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const token = localStorage.getItem('token');

  let location = useLocation();

  if (isAuthenticated || token) {
    return children;
  }
  return <Navigate to='/login' replace state={{ path: location.pathname }} />;
}

export default PrivateRoute;
