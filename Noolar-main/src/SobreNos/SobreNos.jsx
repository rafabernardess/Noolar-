import ContentHeaderSobreNos from "./components/contentHeaderSobreNos";
import Desenvolvedores from "./components/Desenvolvedores";
import "./css/styleSobreNos.css";


function SobreNos() {
  return (
    <>
        <h1 id="tituloSobreNos">Valores que fazem a diferença.</h1>
          <img src="/bgSobreNos.svg" alt="fundo" className="bgSobreNos" />
          <ContentHeaderSobreNos
            iconImage="/starIcon.svg"
            legenda="estrela"
            title="Missão"
            text="A Noolar apoia estrangeiros latinos no Brasil, oferecendo informações úteis para facilitar sua integração."
          />
          <ContentHeaderSobreNos
            iconImage="/alvoIcon.svg"
            legenda="alvo"
            title="Visão"
            text="Ser a principal plataforma de apoio para estrangeiros latinos, reconhecida pela excelência em educação e suporte comunitário."
          />
          <ContentHeaderSobreNos
            iconImage="/diamanteIcon.svg"
            legenda="diamante"
            title="Valores"
            text="Empatia, solidariedade, transparência, confiabilidade, educação e capacitação."
          />
       
        <section className="ConteudoSobreNos">
      <h2 id="tituloConteudoSobreNos" className="highlightAqua">
        Desenvolvedores:
      </h2>
      <div className="devsSection">
        <Desenvolvedores
          nome="Anna Bertochi"
          cargo="Full Stack"
          iconImage="/Anna.svg"
          legenda="foto da Anna Bertochi"
        />
        <Desenvolvedores
          nome="Rafaela Bernardes"
          cargo="Banco de Dados"
          iconImage="/Rafaela.svg"
          legenda="foto da Rafaela"
        />
        <Desenvolvedores
          nome="Elaine Santos"
          cargo="Full Stack"
          iconImage="/elaine.svg"
          legenda="foto da Elaine"
        />
        <Desenvolvedores
          nome="Fernanda Signorelli"
          cargo="Scrum Master"
          iconImage="/Fernanda.svg"
          legenda="foto da Fernanda"
        />
        <Desenvolvedores
          nome="João Cristian"
          cargo="Full Stack"
          iconImage="/Joao.svg"
          legenda="foto do João Cristian"
        />
        <Desenvolvedores
          nome="Julio Ambrósio"
          cargo="Product Owner"
          iconImage="/Julio.svg"
          legenda="foto do Julio"
        />
        <Desenvolvedores
          nome="Matheus Ursino"
          cargo="Full Stack"
          iconImage="/Matheus.svg"
          legenda="foto do Matheus"
        />
        <Desenvolvedores
          nome="Renato Candiani"
          cargo="Front-End"
          iconImage="/Renato.svg"
          legenda="foto do Renato"
        />
      </div>
    </section>
    </>
  );
}

export default SobreNos;
