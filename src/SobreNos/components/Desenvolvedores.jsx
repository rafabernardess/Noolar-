import { LucideGithub, LucideLinkedin } from "lucide-react";
import "../css/styleDesenvolvedores.css";

function Desenvolvedores(props) {
  return (
    <div className="developers">
      <img
        src={props.iconImage}
        alt={props.legenda}
        className="iconDev"
        width={128}
        height={128}
      />
      <div className="contentTextDev">
        <h2 className="subtitleDevs">{props.nome}</h2>
        <h2 className="cargoDev highlightAqua">{props.cargo}</h2>
        <div className="iconsDev">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLinkedin"
          >
            <LucideLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="iconGitHub"
          >
            <LucideGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Desenvolvedores;
