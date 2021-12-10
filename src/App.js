
import { BrowserRouter } from 'react-router-dom';   

import { AuthProvider } from './context/AuthContext';

import { Routes } from './routes';

import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
        <Feed/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
