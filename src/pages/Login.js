import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/login.css';

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLoginClick = () => {
    const loggedInUser = onLogin(user); // Call the prop function to log in

    if (loggedInUser) {
      // Store logged in user in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

      // Check if user is an admin
      if (loggedInUser.role === 'Admin') {
        navigate('/admin'); // Navigate to admin page
      } else {
        // Navigate back to the place user came from, or to home if no 'from' is set
        const from = location.state?.from || "/";
        navigate(from);
      }
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <div className="cart-heading">
        <h1 className='heading-3 header-label'>Mina sidor</h1>
      </div>
      <div className='login-container'>
        <h3 className='subheading-1'>Logga in</h3>
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
