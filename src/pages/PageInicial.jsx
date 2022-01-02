import React from 'react';
import { Link } from 'react-router-dom';

export const PageInicial = () => {
  return (
    <div>
      <Link to='/restaurants'>Home</Link> <Link to='/cart'>Cart</Link>{' '}
      <Link to='/account'>Acount</Link> <Link to='/login'>Login</Link>
      <Link to='/signup'>Cadastro</Link> 
      <Link to='/signup/newaddress'>Endereço</Link>
    </div>
  );
};
