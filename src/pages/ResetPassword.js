import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword({ onReset }) {
  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const handleResetClick = () => {
    const resetResult = onReset(resetEmail, newPassword);

    if (resetResult) {
      setMessage("Lösenordet har återställts! Du kan nu logga in med ditt nya lösenord.");
    } else {
      setMessage("E-postadressen finns inte. Vänligen försök igen.");
    }
  };

  return (
    <div>
      <div className="cart-heading">
        <h1 className="main-heading page-heading">Glömt lösenord</h1>
      </div>
      <div className="login-container">
        {message && <p className="reset-message">{message}</p>} 
        <input
          className="input-login"
          type="email"
          placeholder="Ange din email"
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
        />
        <br />
        <input
          className="input-login"
          type="password"
          placeholder="Ange nytt lösenord"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />
        <div className="btn-container-1 space">
          <button
            className="main-btn"
            onClick={handleResetClick}
          >
            Återställ lösenord
          </button>
        </div>
        <p className="main-body" onClick={() => navigate('/login')}>Tillbaka till inloggning</p>
      </div>
    </div>
  );
}

export default ResetPassword;
