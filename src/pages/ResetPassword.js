// components/ResetPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword({ onReset }) {
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <div>
      <div className="cart-heading">
      <h1 className='heading-3 header-label'>Glömt lösenord</h1>
      </div>
      <div className="login-container">
      <input 
      className="input-login"
        type="email" 
        placeholder="Ange din email" 
        value={resetEmail} 
        onChange={(e) => setResetEmail(e.target.value)} 
      /><br />
      <input 
      className="input-login"
        type="password" 
        placeholder="Ange nytt lösenord" 
        value={newPassword} 
        onChange={(e) => setNewPassword(e.target.value)} 
      /><br />
      <div className='btn-container'>
      <p  className=" second-btn" onClick={() => navigate('/login')}>Tillbaka till inloggning</p>
      <button className='main-btn' onClick={() => onReset(resetEmail, newPassword)}>Återställ lösenord</button>
      
    </div>
    </div>
    </div>
  );
}

export default ResetPassword;

