import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null); // For storing the image URL
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];

      if (file && file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreviewUrl(imageUrl); // Save URL for preview
      }

      setFormData({
        ...formData,
        file: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data in localStorage
    localStorage.setItem("contactData", JSON.stringify(formData));
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <div className="submitted">
          <Link to="/">Hem</Link>
          <h2 className="main-body">Tack för att du kontaktar oss! <br/>Vi kommer att kontakta dig så snart som möjligt.</h2>
        </div>
      ) : (
        <div className="contact-page">
          <section className="hero-section-2">
            <img
              src="./img/decorative/DJI_20241010094358_0007_D-Enhanced-NR.jpg"
              alt="Hero"
              className="hero-image"
              id="aboutus-hero-image"
            />


          </section>
<div className="contact-page-container">
          <div className="cart-heading">
            <h1 className="main-heading">Kontakta oss</h1>
          </div>
          <div className="login-container print-container">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <h6 className="input-label">Namn:</h6>
                <input
                  className="input-login"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="För & Efternamn"
                />
              </div>

              <div className="input-container">
                <h6 className="input-label">Email:</h6>
                <input
                  className="input-login"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="test@test.se"
                  required
                />
              </div>

              <div className="input-container">
                <h6 className="input-label">Telefonnummer:</h6>
                <input
                  className="input-login"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="123456789"
                  required
                />
              </div>

              <div className="file-upload-section input-container">
                <h6 className="input-label">Ladda upp en fil eller bild</h6>
                <input type="file" name="file" onChange={handleChange} />
              </div>

              {imagePreviewUrl && ( // Show preview of the image
                <div>
                  <p>Förhandsvisning av vald bild:</p>
                  <img
                    src={imagePreviewUrl}
                    alt="Förhandsvisning"
                    style={{ width: "200px", height: "auto" }}
                  />
                </div>
              )}

              <div className="input-container">
                <h6 className="input-label">Meddelande:</h6>
                <textarea
                  className="input-login"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Skriv ett meddelande..."
                  required
                ></textarea>
              </div>

              <div className="btn-container-1">
                <button className="main-btn" type="submit">
                  Skicka meddelande
                </button>
              </div>
            </form>
          </div>
          <div className="contact-info main-body">
            <div className="contact-section">
              <h1 className="section-heading heading-3">Gröna Tryck</h1>
              <p>
                <strong>Besöksadress:</strong>
                <br />
                Västra Kyrkogatan 1B
                <br />
                903 29 Umeå, Sverige
              </p>
              <p>
                <strong>Öppettider:</strong>
                <br />
                Kontor: Tis-Fre: 09.00-16.00
                <br />
                Telefon: Mån-Fre 09.00-16.30
              </p>
              <p>
                <strong>Kontaktinfo:</strong>
                <br />
                Telefon: +46 (0)90 13 13 40
                <br />
                E-post: kontakt@gronatryck.se
              </p>
              <p>
                Instagram: gronatryck <br />
                Facebook: Gröna Tryck
              </p>
            </div>

            <div className="contact-section">
              <h1 className="section-heading heading-3">Lager</h1>
              <p>
                Adress: Kungsgatan 26
                <br />
                903 21 Umeå, Sverige
                <br />
                (ej post/leveransadress)
              </p>
              <p>Dir. tel. Produktion: +46 (0)90 34 35 351</p>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
    
  );
}

export default Contact;
