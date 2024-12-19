import React from "react";
import "./css/styleHeader.css";

function HeaderDocs(props) {
  return (
    <>
      <header>
        <div className="NescessariosDocsNbgImage">
          <img src="/bgBanner.svg" alt="" />
        </div>
        <div className="NescessariosDocsNbox-title">
          <h1 className="NescessariosDocsNtitulo">Documentos Necessários</h1>
            <img
              className="NescessariosDocsNImg"
              src="/Documentos.svg"
              alt="Descripción de la Imagen"
              
             />
          <h2 className="NescessariosDocsNsubtitulo">
            Organizar a documentação desde o início agiliza o processo de
            imigração e evita atrasos na adaptação ao novo país!
          </h2>
        </div>

        <div className="NescessariosDocsNbtnSeusLivros"></div>
      </header>
    </>
  );
}

export default HeaderDocs;
