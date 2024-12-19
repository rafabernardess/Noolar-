import "./css/Inicio.css";

function AreaDaLeitura(props) {
  return (
    <>
    <header>
      <div className="LeiturabgImage">
        <img src="/images/bgOficial.png" alt="" />
      </div>
      <div className="Leiturabox-title">
        <h1 className="Leituratitulo">Área de Lectura</h1>
        <h2 className="Leiturasubtitulo">
          Consume contenidos <span className="Leiturahighlight"> educativos</span> ,
          <span className="Leiturahighlight"> culturales </span> y<span className="Leiturahighlight"> enriquecedores</span>
        </h2>
      </div>
      <div className="Leituraimagem-container">
        <img
          className="LeituraestanteIMG"
          src="/images/EstanteDeLivro.png"
          alt="Descripción de la Imagen"
        />
      </div>
      <div className="LeiturabtnSeusLivros">
      
      </div>
    </header>
    </>
  );
}

export default AreaDaLeitura;
