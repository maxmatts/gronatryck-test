import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/login.css';

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLoginClick = () => {
    const loggedInUser = onLogin(user); 

    if (loggedInUser) {
      setError('');
     
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    
      if (loggedInUser.role === 'Admin') {
        navigate('/admin'); 
      } else {
       
        const from = location.state?.from || "/";
        navigate(from);
      }
    } else {
      setError("Fel email eller lösenord. Försök igen.");
    }
  };

  return (
    <div>
     <div className="cart-heading">
            <h1 className="main-heading page-heading">Logga in</h1>
          </div>
      <div className='login-container'>
        {error && <p className='error-message'>{error}</p>}
        <form>
          <div className="input-container">
            <h6 className='input-label'>Email eller kundnummer</h6>
            <input
              className='input-login'
              type="email"
              name="email"
              id="email"
              placeholder="Email eller kundnummer"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <h6 className='input-label'>Lösenord</h6>
            <input
              className='input-login'
              type="password"
              name="password"
              id="password"
              placeholder="Lösenord"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          

          <p className='login-link' onClick={() => navigate('/reset-password')}>
            Glömt lösenord?
          </p>
          <p className='login-link' onClick={() => navigate('/register')}>Ny kund? Skapa konto här</p>
          <div className='btn-container-1'>
            <button className='main-btn' type="button" onClick={handleLoginClick}>
              Logga in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
