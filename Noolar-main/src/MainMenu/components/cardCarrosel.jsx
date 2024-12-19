import React from "react";
import "./css/MainMenuStyle.css";
import { Link } from "react-router-dom";

function CardCarrosel(props) {
  return (
    <div
      className="carroso_slide"
      style={{ backgroundImage: `url(${props.bgImage})` }} // Aplicando a imagem de fundo
    >
      <div className="textCarrosel">
        <h2>{props.titulo}</h2>
        <h4>{props.texto}</h4>
        <Link to={props.destino}>
          <a href={props.lingolar}>
            <button className="carroselButton">
              <p>Acesse Aqui</p>
            </button>
          </a>
        </Link>
      </div>
      <div className={props.classeImagem}></div>
    </div>
  );
}

export default CardCarrosel;
