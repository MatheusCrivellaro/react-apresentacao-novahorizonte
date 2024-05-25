import './App.css';
import NavBar from "./components/NavBar";
import TitlePage from "./components/TitlePage";
import InformationContent from "./components/InformationContent";
import InformationText from "./components/InformationText";
import InformationImage from "./components/InformationImage";

function App() {
    return (
        <div className="container-menu">
            <NavBar/>
            <div className="container-title">
                <TitlePage/>
                <span className="container-sombra"/>
            </div>
            <div className="container-conteudo">
                <InformationContent number="01">
                    <InformationText number="01" title="O que é a NovaHorizonte?" preTitle="SOBRE NÓS">
                        A NovaHorizonte Tecnologia e Inovação é uma empresa fictícia criada para exemplificar um modelo de
                        negócio inovador no setor de tecnologia.
                        Especializada em Inteligência Artificial e Machine Learning, a NovaHorizonte desenvolve soluções que
                        transformam dados em insights valiosos, automatizam processos e aumentam a eficiência operacional
                        das empresas.
                    </InformationText>
                    <InformationImage image="/images/pexels-packermann-1666021.jpg"/>
                </InformationContent>

                <InformationContent>
                    <InformationImage image="/images/IMG_2703%20(1).JPG"/>
                    <InformationText number="01" title="O que é a NovaHorizonte?" preTitle="SOBRE NÓS">
                        A NovaHorizonte Tecnologia e Inovação é uma empresa fictícia criada para exemplificar um modelo de
                        negócio inovador no setor de tecnologia.
                        Especializada em Inteligência Artificial e Machine Learning, a NovaHorizonte desenvolve soluções que
                        transformam dados em insights valiosos, automatizam processos e aumentam a eficiência operacional
                        das empresas.
                    </InformationText>
                </InformationContent>
            </div>
        </div>
  );
}

export default App;
