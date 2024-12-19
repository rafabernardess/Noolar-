import './css/livrosstyle.css'

function Livros(props) {
  return (
    
    <div className="Leituralivro">
    <a href={props.pdf} download>
      <img className='LeituraimagemLivro' src={props.image} alt={props.desc} draggable="false" />
    </a>
    <div className="Leituralegenda">
    <h4>{props.titulo}</h4>
    <p >{props.autor}</p>
    </div>
  </div>
);
}

export default Livros;
