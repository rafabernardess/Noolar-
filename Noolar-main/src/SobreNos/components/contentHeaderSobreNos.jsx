import "../css/styleContentHeaderSobreNos.css";

function ContentHeaderSobreNos(props) {
  return (
    <div className="containerIconSobreNos">
      <img
        src={props.iconImage}
        alt={props.legenda}
        className="iconSobreNos"
        width={90}
        height={90}
      />
      <div className="sectionTexts">
        <h2 className="subtitleSobreNos">{props.title}</h2>
        <p className="textSobreNos">{props.text}</p>
      </div>
    </div>
  );
}

export default ContentHeaderSobreNos;
