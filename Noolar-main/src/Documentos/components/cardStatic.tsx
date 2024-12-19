import React from 'react';
import './css/styleCardStatic.css'; // Certifique-se de que o CSS está importado corretamente
import { Link } from 'react-router-dom';

function CardStatic(props) {
  const handleClick = () => {
    // Faz a rolagem manualmente para o topo
    window.scrollTo(0, 0);
  };
  return (
    <Link to={props.caminho} onClick={handleClick} className='linkNavigate DocscardStatic'>
    <img 
      src={props.imagem} 
      alt={props.legenda} 
      className="DocscardStatic-image"
    />
    <h2 className="DocscardStatic-title">{props.titulo}</h2>
  </Link>

  );
};

export default CardStatic;
