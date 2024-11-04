import React, { useState, useRef, useEffect } from "react";
import "../styles/chat.css"; 
import { LuMessageCircle } from "react-icons/lu"; 

const Chat = () => {
  const [isVisible, setIsVisible] = useState(false); 
  const chatRef = useRef(null); 

  // Funktion för att växla mellan att visa och dölja chatten
  const toggleChat = () => {
    setIsVisible(!isVisible); // Byter till synlig eller dold status
  };

  // Stänger chatten när användaren klickar utanför den
  const handleClickOutside = (event) => {
    if (chatRef.current && !chatRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Lägg till event listener för klick utanför chatten
    document.addEventListener("mousedown", handleClickOutside);
    
    // Rensa event listener när komponenten avmonteras
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div className="chat-window" ref={chatRef}>
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

