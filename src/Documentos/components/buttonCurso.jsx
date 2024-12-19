import { LucideLinkedin } from "lucide-react";
import "./StyleButtonCurso.css";


function ButtonCurso(props) {

  return (
    <>
        <div className="btnCurso">
            <h4>{props.texto}</h4>
        </div>
    </>
  );
}

export default ButtonCurso;
