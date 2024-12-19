import React from "react";
import "./AppServicos.css";
import CardServico from "./components/cardServico";

function AppServico() {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "rotateY(180deg)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "rotateY(0deg)";
  };

  return (
    <>
      {/* Título */}
      <div className="containerHeaderServicos">
        <div className="contentHeaderServicos">
          <div className="textHeaderServicos">
            <h1>
              Conheça Alguns
              <span className=" highlightOrange">
                {" "}
                Serviços Públicos
              </span> do <span className="highlightOrange">Brasil!</span>
            </h1>
          </div>
          <img className="hospitalimg" src="/images/hospital.png" alt="" />
        </div>
      </div>

      <img className="fundoDaHeader" src="/images/fundo.png" alt="" />

      {/* Começo */}
      <div className="container">
        <div className="rectangle-div"></div>
        <div className="textMidServico">
          <h2>
            Descubra a gama de
            <span className=" highlightAqua"> Serviços Públicos</span>{" "}
            oferecidos no Brasil e como eles podem{" "}
            <span className="highlightOrange">facilitar o seu dia a dia!!</span>
          </h2>
        </div>

        <img className="fundoDoBody" src="/images/fundo2.png" alt="" />
        <div className="ServicoscontentSection">
          <CardServico
            bgColor="#006182"
            textoFrente="Renda Brasil"
            textoVerso="Voltado para garantir renda mínima às famílias em situação de vulnerabilidade, promovendo inclusão social."
          />
          <CardServico
            bgColor="#198168"
            textoFrente="Assistência Social"
            textoVerso="Atendimento e proteção a brasileiros em vulnerabilidade social, assegurando direitos e acesso a serviços essenciais."
          />
          <CardServico
            bgColor="#F6794A"
            textoFrente="Educação"
            textoVerso="Sistema público de ensino gratuito no Brasil, abrangendo desde a educação básica até o ensino superior."
          />
          <CardServico
            bgColor="#198168"
            textoFrente="AuxílioMoradia"
            textoVerso="Programa brasileiro que oferece apoio habitacional para famílias de baixa renda, garantindo moradia digna."
          />
          <CardServico
            bgColor="#006182"
            textoFrente="Saúde"
            textoVerso="O Sistema Único de Saúde (SUS) oferece atendimento gratuito a todos os brasileiros, com foco na prevenção e tratamento."
          />
        </div>
      </div>
    </>
  );
}
export default AppServico;
