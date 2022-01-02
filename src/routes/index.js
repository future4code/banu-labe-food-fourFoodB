import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { Account } from '../Pages/Account';
import { Carrinho } from '../Pages/Cart';
import { Login } from '../Pages/Login';
import { PageInicial } from '../Pages/PageInicial';
import PrivateRoute from './PrivateRoutes';
import Cadastro from '../Pages/SignUp/Cadastro';
import CadastroEndereco from '../Pages/SignUp/Address/CadastroEndereco';
import RestaurantDetails from '../Pages/Details/RestaurantDetails';
import Feed from '../Pages/HomePage/Feed';



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
      <Route
        path='/restaurants'
        element={
          <PrivateRoute>
            <Feed />
          </PrivateRoute>
          // Trocar componente Feed
        }
      />
      <Route
        path='/restaurant/:id'
        element={
          <PrivateRoute>
            <RestaurantDetails/>
          </PrivateRoute>
          // Trocar componente Detalhes do Restaurante
        }
      />
    </Router>
  );
};
