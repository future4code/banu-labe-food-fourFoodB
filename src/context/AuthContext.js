import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || '/';

  async function getUserProfile(token) {
    const response = await api.get('/profile', {
      headers: {
        auth: token,
      },
    });

    setUser(response.data.user);
    setIsAuthenticated(true);
  }

  const login = useCallback(
    async (email, password) => {
      setLoading(true);
      try {
        const response = await api.post('/login', { email, password });

        if (response.status !== 200) {
          throw new Error(response);
        }

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        await getUserProfile(response.data.token);

        navigate(from, { replace: true });
      } catch (error) {
        setError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    },
    [from, navigate]
  );

  const logout = useCallback(() => {
    setLoading(false);
    setError(null);
    setUser(null);

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate('/');
  }, [navigate]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };
