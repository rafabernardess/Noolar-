import "./css/cardCursos.css";

function CursoCard(props) {
  return (
    <div className="CursosBox" style={{backgroundColor:props.bgColor}}>
      <img
        className="Cursosimagem"
        src={props.image}
        alt={props.desc}
        draggable="false"
      />
      <div className="Cursoslegenda">
        <h4>{props.titulo}</h4>
        <p>{props.autor}</p>
      </div>
    </div>
  );
}

export default CursoCard;
