import React, { useState } from "react";
import "./css/styleCardServico.css";


function CardServico( {bgColor, textoFrente, textoVerso} ) {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };
  console.log(flipped);
  return (
    <div
      className={`Servicoscard-container ${flipped ? "Servicosflipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="Servicoscard">
        <div className="Servicoscard-front" style={{ backgroundColor: bgColor }}>
          <div className="Servicostext">{textoFrente}</div>
        </div>
        <div className="Servicoscard-back Servicostext" style={{ backgroundColor: bgColor }}>
          {textoVerso}
        </div>
      </div>
    </div>
    
  );
}

export default CardServico;
