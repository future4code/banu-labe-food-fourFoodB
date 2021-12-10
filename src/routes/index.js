import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { Account } from '../pages/Account';
import { Carrinho } from '../pages/Cart';
import { Login } from '../pages/Login';
import { PageInicial } from '../pages/PageInicial';
import PrivateRoute from './PrivateRoutes';
import Cadastro from '../pages/SignUp/Cadastro';
import CadastroEndereco from '../pages/SignUp/Address/CadastroEndereco';



export const Routes = () => {
  return (
    <Router>
      {/* Rotas Públicas */}
      <Route exact path='/' element={<PageInicial />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Cadastro />} />
      <Route path='/signup/newaddress' element={<CadastroEndereco/>} />
  
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
