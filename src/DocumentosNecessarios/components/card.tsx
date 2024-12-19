import React, { useState } from "react";
import "./css/styleCard.css";

interface CardProps {
  bgColor: string;
  textoFrente: string;
  textoVerso: string;
  imagemFrente: string;
  legendaImagemFrente: string;
}

function Card({ bgColor, textoFrente, textoVerso, imagemFrente, legendaImagemFrente }: CardProps) {
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
      className={`DocsNcard-container ${flipped ? "DocsNflipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="DocsNcard">
        <div className="DocsNcard-front" style={{ backgroundColor: bgColor }}>
          <div className="DocsNtext">{textoFrente}</div>
          <img src={imagemFrente} alt={legendaImagemFrente} width={100} height={100} className="DocsNimageFront"/>
        </div>
        <div className="DocsNcard-back DocsNtext" style={{ backgroundColor: bgColor }}>
          {textoVerso}
        </div>
      </div>
    </div>
    
  );
}

export default Card;
