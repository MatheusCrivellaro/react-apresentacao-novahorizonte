import './App.css';
import NavBar from "./components/NavBar";
import TitlePage from "./components/TitlePage";
import InformationContent from "./components/InformationContent";

function App() {
  return (
      <div className="container-menu">
          <NavBar/>
          <div className="container-title">
              <TitlePage/>
              <span className="container-sombra"/>
          </div>
          <div className="container-conteudo">
              <InformationContent />
          </div>
          <div>
              <div>
                  <InformationContent />
              </div>
          </div>
      </div>
  );
}

export default App;
