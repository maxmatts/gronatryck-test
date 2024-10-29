import React from 'react';

const Radiobutton = ({ name, color, onChange }) => {
  return (
    <label className="color-circle-main" htmlFor={name}>
      <input 
        type="radio" 
        id={name} 
        name="color" 
        value={name} // Använd namn som värde för att identifiera rätt färg
        onChange={onChange} // Hantera färgändringen
        style={{ display: 'none' }} // Döljer den faktiska radio-knappen
      />
      <span
        className="color-circle"
        style={{ backgroundColor: color }}
        title={name}
      ></span>
    </label>
  );
};

export default Radiobutton;
