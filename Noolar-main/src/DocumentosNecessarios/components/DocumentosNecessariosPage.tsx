import React from "react";
import HeaderDocs from "./Header";
import TextCard from "./textCard";
import "../AppDocsNecessarios.css";
import Card from "./card";
function DocsNecessariosPage() {
  return (
    <>
      <div className="DocsNcontent">
        <div className="DocsNDocsNheader">
          <HeaderDocs />
        </div>
        
        <div className="DocsNsection">
            
          <TextCard
            textoCard={
              <>
                Conheça e providencie de forma correta para que tenha uma{" "}
                <span className="DocsNhighlightAqua">integração adequada</span> e{" "}
                <span className="DocsNhighlightOrange">tranquila</span> no país!{" "}
              </>
            }
          />
          <div className="DocsNcontentSection">
           
            <Card
              bgColor="#198168"
              textoFrente="Certidão de Nascimento"
              textoVerso="Onde conseguir: Cartório de Registro Civil; pode ser necessário traduzir e registrar no Brasil."
              imagemFrente="/certidao.svg"
              legendaImagemFrente="imamem foda"
            />
            <Card
              bgColor="#F6794A"
              textoFrente="Cadastro de Pessoa Física (CPF)"
              textoVerso="Onde conseguir? Cartório de Registro Civil; pode ser necessário traduzir e registrar no Brasil."
              imagemFrente="/cpf.svg"
              legendaImagemFrente="imamem foda"
            />
            <Card
              bgColor="#006182"
              textoFrente="Comprovante de Residência"
              textoVerso="Onde conseguir? Conta de água, luz, ou contrato de aluguel."
              imagemFrente="/residencia.svg"
              legendaImagemFrente="imamem foda"
            />
            <Card
              bgColor="#F6794A"
              textoFrente="Registro Nacional Estrangeiro (RNE)"
              textoVerso="Onde conseguir? Polícia Federal, após a entrada no Brasil."
              imagemFrente="/rne.svg"
              legendaImagemFrente="imamem foda"
            />
            <Card
              bgColor="#006182"
              textoFrente="Certificado de Antecedentes Criminais"
              textoVerso="Onde conseguir? Polícia Federal ou órgão equivalente no país de origem."
              imagemFrente="/criminal.svg"
              legendaImagemFrente="imamem foda"
            />
            <Card
              bgColor="#198168"
              textoFrente="Certidão de casamento (se aplicável"
              textoVerso="Onde conseguir? Cartório de Registro Civil; também pode precisar de tradução e registro."
              imagemFrente="/casamento.svg"
              legendaImagemFrente="imamem foda"
            />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default DocsNecessariosPage;
