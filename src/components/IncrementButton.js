import React, { useState, useEffect } from "react";

// Definierar funktionen IncrementButton med props som argument
function IncrementButton(props) {
  // Skapar state-variabeln number och initierar den med quantity från props eller 0
  const [number, setNumber] = useState(props.quantity || 0); // Start with quantity from props

  // useEffect hook för att uppdatera state när props.quantity ändras
  useEffect(() => {
    setNumber(props.quantity); // Update state when props change
  }, [props.quantity]);

  // Funktion för att minska number
  function decreaseNumber() {
    const newNumber = number - 1; // Beräknar nytt nummer
    if (newNumber < 0) {
      change(0); // Sätter number till 0 om det blir negativt
    } else {
      change(newNumber); // Annars sätter number till newNumber
    }
  }

  // Funktion för att öka number
  function increaseNumber() {
    const newNumber = number + 1; // Beräknar nytt nummer
    change(newNumber); // Sätter number till newNumber
  }

  // Funktion för att hantera ändring av inputfältet
  function changeNumber(event) {
    const newNumber = Math.max(0, event.target.value); // Säkerställer att värdet inte blir negativt
    change(newNumber); // Anropar change-funktionen med det nya numret
  }

  // Funktion för att uppdatera state och kalla på handleChange från props
  function change(number) {
    setNumber(number); // Uppdaterar state
    props.handleChange(props.size, number); // Passar storlek och nummer till föräldern
  }

  return (
    <div className="increment-input">
      <label htmlFor={props.size}>{props.size}:</label> {/* Visar etikett med props.size */}
      <div className="increment-number-input">
        <button
          onClick={decreaseNumber} // Anropar decreaseNumber när knappen klickas
          type="button"
          className="increment-button"
        >
          - {/* Minskningsknapp */}
        </button>
        <input
          className="input-number"
          onChange={changeNumber} // Anropar changeNumber när inputfältet ändras
          type="number"
          id={props.size} // ID för inputfältet
          min="0" // Sätter minimi värde till 0
          value={number} // Sätter värdet till number från state
        />
        <button
          onClick={increaseNumber} // Anropar increaseNumber när knappen klickas
          type="button"
          className="increment-button"
        >
          + {/* Ökningsknapp */}
        </button>
      </div>
    </div>
  );
}

export default IncrementButton; // Exporterar komponenten

