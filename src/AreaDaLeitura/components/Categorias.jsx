import './css/Categorias.css'

function BoxLivros(props)  {
    return (
        <div className="Leiturabox-livros">
            <div className="Leituracard">
            <h3 className='LeituraCategoria'>{props.categoria}:</h3>
            <p className='LeituratextoDoCard'>{props.textoCard}</p>
            <div className="Leituralivros">
            </div>
            </div>
        </div>
    )
}

export default BoxLivros;