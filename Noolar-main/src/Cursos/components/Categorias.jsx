import './css/Categorias.css'

function BoxLivros(props)  {
    return (
        <div className="Cursosbox-livros">
            <div className="Cursoscard">
            <h3 className='CursosCategoria'>{props.categoria}:</h3>
            <p className='CursostextoDoCard'>{props.textoCard}</p>
            <div className="Cursoslivros">
            </div>
            </div>
        </div>
    )
}

export default BoxLivros;