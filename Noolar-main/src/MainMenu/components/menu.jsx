import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Card";
import Carrosel from "./Carrosel";

import "./css/MainMenuStyle.css";
import CarroselSegundo from "./CarroselSegundo";

function AppMenu() {
  return (
    <div className="app-container">
      <section className="hero_container">
        <header className="hero">
          <div className="hero__image">
            <img
              src="/images/GloboMenu.png"
              alt="Globo representando conexões globais"
              className="hero__globe"
            />
          </div>
          <div className="hero_text">
            <h1 className="hero__title">Noolar</h1>
            <p className="hero__subtitle">
              Um lar acolhedor para
              <span className="highlight"> Imigrantes </span>
            </p>
            <p className="hero__subtitle">
              do
              <span className="highlight"> Mercosul </span>e
              <span className="highlight"> América Latina. </span>
            </p>
          </div>
        </header>
      </section>

      <main className="main_noolarmenu">
        <section className="intro">
          <div className="label_imigrante">
            <p className="intro__text">
              Noolar é uma plataforma inteligente para{" "}
              <span className="highlight">Imigrantes Latinos!</span>
            </p>
          </div>
        </section>
        <section className="sectionCarroso">
          <CarroselSegundo></CarroselSegundo>
        </section>

        <section className="features">
          <div className="mission__content">
            <h2 className="mission__title">Nosso objetivo é:</h2>
            <p className="mission__description">
              Oferecer cursos de Português e Orientação sobre <br />
              comportamento no ambiente de trabalho.
            </p>
          </div>
          <div className="features__grid">
            <Cards
              title="Área de Leitura"
              description="Acesse ótimos conteúdos para leitura, dos mais diversos gêneros!"
              imageUrl="/images/livros.png"
              destino="/AreaDaLeitura"
              buttonText="Acesse aqui"
            />
            <Cards
              title="Cursos"
              description="Desenvolva-se, aprenda, evolua!"
              imageUrl="/images/mochila.png"
              destino="/Cursos"
              buttonText="Acesse aqui"
            />
            <Cards
              title="Comunidade"
              description="Apoio e conexões com outros imigrantes para compartilhar experiências e crescer juntos."
              imageUrl="/images/comunity.png"
              destino="/Comunidades"
              buttonText="Acesse aqui"
            />
          </div>
        </section>

        <section className="ai-tool">
          <div className="boxAI">
            <Carrosel></Carrosel>
            </div>
        </section>

        <div className="donation_container">
          <section className="donation">
            <img
              src="/images/donar.png"
              alt="Imagem representando doação"
              className="donation__image"
            />
            <div className="donation__content">
              <h2 className="donation__title">Doe aqui!</h2>
              <p className="donation__description">
                Ajude a transformar vidas e apoiar imigrantes Latinos em sua
                jornada de integração.
              </p>
              <Link to="/Doacao" className="donation__button">
                Doar agora
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AppMenu;
