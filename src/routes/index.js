import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { Account } from '../pages/Account';
import { Carrinho } from '../pages/Cart';
import { Login } from '../pages/Login';
import { PageInicial } from '../pages/PageInicial';
import PrivateRoute from './PrivateRoutes';

export const Routes = () => {
  return (
    <Router>
      {/* Rotas Públicas */}
      <Route exact path='/' element={<PageInicial />} />
      <Route path='/login' element={<Login />} />

      {/* Rotas Protegidas */}
      <Route
        path='/account'
        element={
          <PrivateRoute>
            <Account />
          </PrivateRoute>
          // Trocar componente Account
        }
      />
      <Route
        path='/cart'
        element={
          <PrivateRoute>
            <Carrinho />
          </PrivateRoute>
          // Trocar componente Carrinho
        }
      />
    </Router>
  );
};
