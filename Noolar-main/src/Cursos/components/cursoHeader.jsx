import "./css/Inicio.css";

function CursosHeader() {
  return (
    <>
      <header className="headerCursos">
        <div className="CursosbgImage">
          <img src="/images/bgOficial.png" alt="" />
        </div>
        <div className="contentHeaderCursos">
          <img
            className="CursosestanteIMG"
            src="/cursoIconHeader.svg"
            alt="Descripción de la Imagen"
          />
          <div className="Cursosbox-title">
            <h1 className="Cursostitulo">Cursos</h1>
            <h2 className="Cursossubtitulo">
              Aprenda de forma <span className="Cursoshighlight">fácil</span> e
              <span className="Cursoshighlight"> gratificante! </span>
            </h2>
          </div>
        </div>
        <div className="CursosbtnSeusLivros"></div>
      </header>
    </>
  );
}

export default CursosHeader;
