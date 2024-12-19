import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppAreaDaLeitura from "./AreaDaLeitura/AppAreaDaLeitura";
import AppDocs from "./Documentos/AppDocs";
import AppDocsNecessarios from "./DocumentosNecessarios/AppDocsNecessarios";
import AppDaComunidades from "./ComunidadesArea/AppComunidades.jsx";
import NavbarApp from "./header/NavBarApp.jsx";
// import Cursos from "./Cursos"
import Footer from "./footer/Footer.jsx";
import SobreNos from "./SobreNos/SobreNos.jsx";
import AppMenu from "./MainMenu/components/menu.jsx";
import AppServico from "./ServicesPage/AppServico.jsx";
import AppCursos from "./Cursos/AppCursos.jsx";
function App() {
  return (
    <Router>
      <header>
        <NavbarApp />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AppMenu />} />
          <Route path="/AreaDaLeitura" element={<AppAreaDaLeitura />} />
          <Route path="/Documentos" element={<AppDocs />} />
          <Route
            path="/Documentos/DocumentosNecessarios"
            element={<AppDocsNecessarios />}
          />
          <Route path="/Documentos/Servicos" element={<AppServico />} />

          <Route path="/Comunidades" element={<AppDaComunidades />} />
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route path="/Cursos" element={<AppCursos />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
//aaaaa