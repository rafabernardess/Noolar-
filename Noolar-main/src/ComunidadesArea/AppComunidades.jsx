import Inicio from "./components/Inicio";
import Cards from "./components/Cards";
import "./css/styleComunidade.css";
import { useEffect } from "react";
import TextCard from "./components/ComunidadeTextCard";

function AppDaComunidades() {
  useEffect(() => {
    document.body.classList.add("bgComunidade");
    return () => {
      document.body.classList.remove("bgComunidade");
    };
  }, []);
  return (
    <>
      <div className="contentComunidade">
        <Inicio />

        <div className="textInWhite">
          <h2 className="textoEmBranco">
            Uma boa <span className="highlightOrange"> experiência </span> é o
            que desejamos a<span className="highlightAqua"> vocês </span>.
          </h2>
        </div>

        <div className="paginaCOmunidadeObjetos">
       
          <Cards />
        </div>
      </div>
    </>
  );
}

export default AppDaComunidades;
