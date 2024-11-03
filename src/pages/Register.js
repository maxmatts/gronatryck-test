import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import "../styles/register.css";

function Register({ onRegister }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    companyName: "",
    street: "",
    city: "",
    country: "",
    zipcode: "",
    confirmPassword: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, firstname, lastname, street, city, country, zipcode } = user;
    if (!email || !password || !firstname || !lastname || !street || !city || !country || !zipcode) {
      alert("Vänligen fyll i alla obligatoriska fält.");
      return;
    }

    localStorage.setItem("registeredUser", JSON.stringify(user));

    if (onRegister) {
      onRegister(user);
    }

    setRegistrationSuccess(true);

    setTimeout(() => {
      navigate("/login");
    }, 4000);
  };

  return (
    <div>
      <div className="cart-heading">
        <h1 className="main-heading page-heading">Registrera dig</h1>
      </div>
      <div className="login-container">
        {registrationSuccess ? (
          <p className="success-message">Registreringen lyckades! Du omdirigeras till inloggningssidan om några sekunder...</p>
        ) : (
          <>
            <h3>Skapa konto</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-grid">
                <div className="input-row">
                  <div className="input-item">
                    <h6 className="input-label">Förnamn*</h6>
                    <input
                      className="input-login"
                      type="text"
                      name="firstname"
                      placeholder="Förnamn"
                      value={user.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-item">
                    <h6 className="input-label">Efternamn*</h6>
                    <input
                      className="input-login"
                      type="text"
                      name="lastname"
                      placeholder="Efternamn"
                      value={user.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="input-item wide">
                  <h6 className="input-label">Företagsnamn (valfritt)</h6>
                  <input
                    className="input-login"
                    type="text"
                    name="companyName"
                    placeholder="Företagsnamn (valfritt)"
                    value={user.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-item">
                  <h6 className="input-label">Email*</h6>
                  <input
                    className="input-login"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-item">
                  <h6 className="input-label">Adress*</h6>
                  <input
                    className="input-login"
                    type="text"
                    name="street"
                    placeholder="Adress"
                    value={user.street}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-row">
                  <div className="input-item">
                    <h6 className="input-label">Stad*</h6>
                    <input
                      className="input-login"
                      type="text"
                      name="city"
                      placeholder="Stad"
                      value={user.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-item">
                    <h6 className="input-label">Postnummer*</h6>
                    <input
                      className="input-login"
                      type="text"
                      name="zipcode"
                      placeholder="Postnummer"
                      value={user.zipcode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="input-item">
                  <h6 className="input-label">Land*</h6>
                  <input
                    className="input-login"
                    type="text"
                    name="country"
                    placeholder="Land"
                    value={user.country}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="password-section">
                  <h4>Välj lösenord</h4>
                  <div className="input-item">
                    <h6 className="input-label">Lösenord*</h6>
                    <input
                      className="input-login"
                      type="password"
                      name="password"
                      placeholder="Välj lösenord"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-item">
                    <h6 className="input-label">Bekräfta lösenord*</h6>
                    <input
                      className="input-login"
                      type="password"
                      name="confirmPassword"
                      placeholder="Bekräfta lösenord"
                      value={user.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="checkbox-container">
                  <input type="checkbox" id="news" name="news" className="checkbox-input" />
                  <label htmlFor="news">Ja, Jag vill ta emot nyhetsbrev.</label>
                </div>

                <p className="login-link" onClick={() => navigate("/login")}>
                  Har du redan ett konto? Logga in här
                </p>
              </div>

              <div className="btn-container-1">
                <button className="main-btn" type="submit">
                  Skapa konto
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Register;
