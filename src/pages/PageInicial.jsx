import React from 'react';
import { Link } from 'react-router-dom';

export const PageInicial = () => {
  return (
    <div>
      <Link to='/'>Home</Link> <Link to='/cart'>Cart</Link>{' '}
      <Link to='/account'>Acount</Link> <Link to='/login'>Login</Link>
    </div>
  );
};
