// Importerar React
import React from 'react';

// Definierar Radiobutton-komponenten som tar emot name, color och onChange som props
const Radiobutton = ({ name, color, onChange }) => {
  return (
    <label className="color-circle-main" htmlFor={name}> {/* Label för radio-knappen */}
      <input 
        type="radio" // Definierar typen som radio
        id={name} // Sätter ID till namnet för att koppla label och input
        name="color" // Sätter namnet för att gruppera radio-knapparna
        value={name} // Använder namn som värde för att identifiera rätt färg
        onChange={onChange} // Hanterar färgändringen
        style={{ display: 'none' }} // Döljer den faktiska radio-knappen
      />
      <span
        className="color-circle" // Klass för att styla färgcirkeln
        style={{ backgroundColor: color }} // Sätter bakgrundsfärgen till den angivna färgen
        title={name} // Visar färgnamnet som tooltip
      ></span>
    </label>
  );
};

// Exporterar Radiobutton-komponenten för användning i andra delar av appen
export default Radiobutton;

