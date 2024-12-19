import React from "react";
import HeaderDocs from "./Header";
import TextCard from "./textCard";
import "../AppDocumentos.css";
import Card from "./card";
import CardStatic from "./cardStatic";
import Footer from "./final";
function DocsPage() {
  return (
    <>
      <div className="Docscontent">
        <div className="Docsheader">
          <HeaderDocs />
        </div>
        <div className="Docssection">
          <div className="Docstexto">
            <h2 className="DocshighlightAqua">
              Aqui te informamos tudo que precisa para sua{" "}
              <span className="DocshighlightBlue">nova jornada!</span>
            </h2>
          </div>
          <TextCard
            classe="Docsbox-livros"
            classeDoTexto="DocstextoDoCard"
            textoCard={
              <>
                Estar com a documentação em dia é{" "}
                <span className="DocshighlightAqua">essencial!</span>
              </>
            }
          />
          <img src="/airplane.svg" alt="" className="Docsairplane" />

          <TextCard
            classe="Docsbox-livrosDireita"
            classeDoTexto="DocstextoDoCardDireita"
            textoCard={
              <>
                Estar com a documentação em dia é{" "}
                <span className="DocshighlightAqua">essencial!</span>
              </>
            }
          />
          <div className="Docstexto">
            <h2 className="DocshighlightBlue">
              Facilitando a <span className="DocshighlightOrange">integração </span>
              celebrando a <span className="DocshighlightAqua">diversidade. </span>
            </h2>
          </div>

          <div className="DocscontentSectionFirst">
            <CardStatic
              imagem="/Documentos.svg"
              legenda="Documentos"
              titulo="Documentação Necessária"
              caminho="DocumentosNecessarios"
            />
            <CardStatic
              imagem="/hospital.png"
              legenda="Documentos"
              titulo="Serviços Públicos"
              caminho="Servicos"
            />
            <CardStatic
              imagem="/direitos.png"
              legenda="Documentos"
              titulo="Direitos e Deveres do imigrante"
              caminho="DocumentosNecessarios"
            />
          </div>
          <div className="Docstexto">
            <h2 className="DocshighlightBlue textDocs">Perguntas Frequentes:</h2>
          </div>
          <div className="DocscontentSection">
            <Card
              bgColor="#006182"
              textoFrente="Qual é o prazo para obter um visto?"
              textoVerso="O prazo varia de acordo com o tipo de visto e a demanda do consulado, mas pode levar de algumas semanas a vários meses."
              imagemFrente="/relogio.png"
              legendaImagemFrente="imagem"
            />
            <Card
              bgColor="#F3B95A"
              textoFrente="O que devo fazer se perder meus documentos no Brasil?"
              textoVerso="Em caso de perda, é importante registrar um boletim de ocorrência e entrar em contato com o consulado ou embaixada do seu país para orientações sobre a reemissão dos documentos."
              imagemFrente="/perderDocs.png"
              legendaImagemFrente="imagem"
            />
            <Card
              bgColor="#198168"
              textoFrente="Posso trabalhar no Brasil enquanto aguardo meu visto?"
              textoVerso="Não, você deve ter um visto de trabalho válido para exercer atividades remuneradas no país."
              imagemFrente="/trabalho.png"
              legendaImagemFrente="imagem"
            />
            <Card
              bgColor="#F6794A"
              textoFrente="Preciso traduzir meus documentos?"
              textoVerso="Sim, muitos documentos precisam ser traduzidos por um tradutor juramentado para serem aceitos pelas autoridades brasileiras."
              imagemFrente="/traduzir.png"
              legendaImagemFrente="imagem"
            />
          </div>
        </div>
        <div className="DocsfooterFinal">
            <Footer />
          </div>
      </div>
    </>
  );
}

export default DocsPage;
