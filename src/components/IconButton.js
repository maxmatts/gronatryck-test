// Exporterar standardfunktionell komponent som heter IconButton
export default function IconButton({ icon, handleClick, description }) {
  return (
    // Renderar en knapp med en onClick-hanterare
    <button
      onClick={handleClick}
      className="icon-button"
      aria-label={description}
    >
      {/* Innehållet i knappen är det ikonobjekt som skickas som prop */}
      {icon}
    </button>
  );
}
