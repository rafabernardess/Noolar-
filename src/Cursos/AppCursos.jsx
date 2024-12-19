import React from "react";
import "./components/css/curso.css";

import "swiper/css";
import CursosHeader from "./components/cursoHeader";
import TextCard from "./components/textCard";
import CursoCard from "./components/Card";
import ButtonCurso from "../Documentos/components/buttonCurso";

function AppCursos() {
  return (
    <div className="Leiturapage">
      <CursosHeader />
      <div className="textsAreaCurso">
        <TextCard
          classe="Cursosbox-livros"
          classeDoTexto="CursostextoDoCard"
          textoCard={
            <>
              Sabemos que aprender algo novo pode ser{" "}
              <span className="CursoshighlightAqua">desafiador!</span>
            </>
          }
        />
        <img src="/airplane.svg" alt="" />
        <TextCard
          classe="Cursosbox-livrosEsquerda"
          classeDoTexto="CursostextoDoCardDireita"
          textoCard={
            <>
              mas estamos aqui para tornar essa experiência mais{" "}
              <span className="CursoshighlightAqua">fácil</span> e{" "}
              <span className="Cursoshighlight">gratificante!</span>
            </>
          }
        />
      </div>

      <div className="bgCursos">
        <div className="cursosSectionDiv">
          <h2>Desenvolva Novas habilidades!</h2>
          <div className="cursosDiv">
            <CursoCard
              image="/portuguesImage.png"
              desc="a"
              titulo="Português"
              autor="Prepare-se para o futuro que você deseja, nossos cursos profissionalizantes abrem as portas para novas oportunidades!"
              bgColor="#198168"
            />
            <CursoCard
              image="/comunicacaoCursos.svg"
              desc="a"
              titulo="Comunicação"
              autor="Aprenda a se expressar com confiança e a construir relações pessoais e profissionais duradouras!"
              bgColor="#F6794A"
            />
            <CursoCard
              image="/profissionalizanteCurso.svg"
              desc="a"
              titulo="Profissionalizantes"
              autor="Prepare-se para o futuro que você deseja, nossos cursos profissionalizantes abrem as portas para novas oportunidades!"
              bgColor="#006182"
            />
          </div>
          <div className="buttonInscrever">
            <ButtonCurso texto="Inscrever-se" id="aaaaa" />
          </div>
          <h2 id="issoAI">Siga a Noolar nas redes sociais!</h2>
          <div className="redesCurso">
            <div className="redesSociais">
              <h4>
                Confira nossas publicações e compartilhe suas experiências sobre
                o uso da plataforma. Quem sabe sua história aparece aqui?
              </h4>
              <img
                src="https://noolar-cursos.vercel.app/img/imigrantes1.svg"
                alt=""
              />
            </div>
            <div className="buttonsRedes">
              <ButtonCurso texto="Linkedin" />
              <ButtonCurso texto="Instagram" />
            </div>
          </div>
        </div>
        <span>...</span>
      </div>
    </div>
  );
}

export default AppCursos;
