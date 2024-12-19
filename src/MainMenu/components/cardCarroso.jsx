import React from 'react';
import './css/MainMenuStyle.css';

function CardCarroso(props) {
  return (
    <div
      className="carroso_slide"
      style={{ backgroundImage: `url(${props.bgImage})` }} // Aplicando a imagem de fundo
    >
      <div className="textCarroso">
        <h2>{props.titulo}</h2>
        <h4>{props.texto}</h4>
      </div>
      <div className={props.classeImagem
      }>
        <img src={props.image} alt="" width={128} />
      </div>
    </div>
  );
}

export default CardCarroso;
