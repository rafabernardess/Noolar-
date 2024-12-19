import React from "react";
import "./css/styleFooter.css";

function Footer() {
  return (
    <footer className="Docsfooter">
      <div className="Docsrodap-item">
          <img className="Docserro" src="/erro.png" alt="Ícone de erro" />

          <span className="Docstexto-cuidado">Cuidado com pessoas que solicitam taxas antecipadas em troca de serviços de documentação!</span>
      </div>
    </footer>
  );
}

export default Footer;