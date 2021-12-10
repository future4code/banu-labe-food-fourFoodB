import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';

import logo from '../../img/logo-labe-food.svg';

import './styles.css';

export const Login = () => {
  const { form, onChange, clearFields } = useForm({ email: '', password: '' });
  const { login, error, loading } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = form;

    console.log({ email, password });

    login(email, password);

    if (!error) {
      clearFields();
    }
  };

  return (
    <main className='login-container'>
      <div className='box-logo'>
        <img src={logo} alt='Logo' />
      </div>
      <h2>Entrar</h2>

      {error && <p className='form-error'>{error}</p>}
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email*</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={onChange}
            placeholder='email@email.com'
            required
            pattern='^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
            title='Insira um email válido'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password*</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Mínimo 6 caracteres'
            onChange={onChange}
            required
            pattern='^.{6,}'
            title='Sua senha deve conter no mínimo 6 caracteres'
          />
        </div>
        {loading ? (
          <button disabled className='login-button' type='submit'>
            Entrando...
          </button>
        ) : (
          <button className='login-button' type='submit'>
            Entrar
          </button>
        )}

        <p>
          Não possui cadastro? <Link to='/'>Clique aqui</Link>.
        </p>
      </form>
    </main>
  );
};
