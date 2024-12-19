import React from "react";
import "./css/styleHeader.css";

function HeaderDocs(props) {
  return (
    <>
      <header>
        <div className="DocsbgImage">
          <img src="/bgBanner.svg" alt="" />
        </div>
        <div className="Docsbox-title">
          <img
            className="DocsImg"
            src="/papel.png"
            alt="Descripción de la Imagen"
          />
          <div className="Docstext-container">
            <h1 className="Docstitulo">Documentos:</h1>

            <h2 className="Docssubtitulo">
              Verifique o guia completo de{" "}
              <span className="Docshighlightyellow">documentos</span> para viver no{" "}
              <span className="Docshighlightyellow">Brasil</span>!
            </h2>
          </div>
        </div>

        <div className="DocsbtnSeusLivros"></div>
      </header>
    </>
  );
}

export default HeaderDocs;
