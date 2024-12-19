import React, { useState, useEffect } from "react";
import "./css/footer.css";

const Footer = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer");
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Se a posição de rolagem + altura da janela atingir o final da página
      if (scrollPosition >= documentHeight) {
        setIsFixed(true); // Torna o rodapé fixo
      } else {
        setIsFixed(false); // Caso contrário, mantém o rodapé no fim do conteúdo
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${isFixed ? "fixed" : ""}`}>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="footer-section">
          <h3>Início</h3>
          <ul className="inicio2">
            <li className="home">Home</li>
            <li className="cursos">Cursos</li>
            <li className="livros">Livros</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Mais</h3>
          <ul>
            <li>Comunidade</li>
            <li>Doação</li>
            <li>Relatos</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Sobre nós</h3>
          <ul>
            <li>Informações da empresa</li>
            <li>Chat</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-contact">
          <div className="social-icons">
            <box-icon
              name="linkedin-square"
              type="logo"
              color="#ffffff"
            ></box-icon>
            <box-icon name="instagram-alt" type="logo" color="#fff"></box-icon>
            <box-icon name="envelope" type="solid" color="#fff"></box-icon>
          </div>
          <button className="contact-button">Contato</button>
        </div>
      </div>
      <div className="footer-copyright">© 2024 Copyright - Noolar</div>
    </footer>
  );
};

export default Footer;
