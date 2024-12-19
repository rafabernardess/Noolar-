import React from "react";
import "./css/styleTextCard.css";

function TextCard(props) {
  return (
    <div className="DocsNNeedbox-livros">
      <div className="DocsNcard">
        <p className="DocsNtextoDoCard">{props.textoCard}</p>
        <div className="DocsNlivros"></div>
      </div>
    </div>
  );
}

export default TextCard;
