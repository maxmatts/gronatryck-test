import React, { useState } from "react";
import "../styles/chat.css"; // Se till att CSS-filen finns för att styla chatten
import { LuMessageCircle } from "react-icons/lu"; // Importera ikonen för chatten

const Chat = () => {
  // useState-hooken för att hålla koll på chattsynlighet
  const [isVisible, setIsVisible] = useState(false); // Initialt är chatten dold

  // Funktion för att växla mellan att visa och dölja chatten
  const toggleChat = () => {
    setIsVisible(!isVisible); // Byter till synlig eller dold status
  };

  return (
    <div className="chat-container">
      {/* Knappen för att öppna eller stänga chatten */}
      {!isVisible && (
        <button
          aria-label="Chatknapp"
          onClick={toggleChat} // Anropar toggleChat-funktionen vid klick
          className="chat-toggle-button"
          style={{ fontSize: "2.8rem" }} // Sätter storlek på knappen
        >
          <LuMessageCircle /> {/* Visar meddelande-ikon */}
        </button>
      )}

      {isVisible && (
        <div className="chat-window">
          {/* Header för chatten */}
          <div className="chat-header">
            <div>
              <h4 className="customer-service">
                Kundtjänst
                <span className="status-container">
                  <div className="online-status"></div>{" "}
                  {/* Visar online-status */}
                </span>
              </h4>
            </div>
            {/* Ny knapp för att stänga chatten */}
            <button className="close-chat-btn" onClick={toggleChat}>
              X {/* Knapp för att stänga chatten */}
            </button>
          </div>

          {/* Meddelanden i chatten */}
          <div className="chat-body">
            <div className="message">
              <strong>Joel</strong>: Hej! Hur kan vi hjälpa dig? <br />
              <span className="timestamp">12:30</span>
            </div>
            {/* Fler meddelanden kan läggas till här */}
          </div>

          {/* Footer för att skriva meddelanden */}
          <div className="chat-footer">
            <input type="text" placeholder="Skriv ditt meddelande här.." />{" "}
            {/* Textfält för att skriva meddelanden */}
            <button>Skicka</button> {/* Knapp för att skicka meddelande */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
