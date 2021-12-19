
import { BrowserRouter } from 'react-router-dom';   

import { AuthProvider } from './context/AuthContext';

import { Routes } from './routes';

import './styles/global.css';

import React from 'react';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
