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
                    <InformationImage image="/images/Logo-novaHorizonte-round-background.png"/>
                </InformationContent>

                <InformationContent>
                    <InformationImage image="/images/pexels-packermann-1666021.jpg"/>
                    <InformationText number="02" title="Porquê criamos esse site?" preTitle="OBJETIVO">
                        A NovaHorizonte Tecnologia e Inovação é uma empresa fictícia criada para exemplificar um modelo de
                        negócio inovador no setor de tecnologia.
                        Especializada em Inteligência Artificial e Machine Learning, a NovaHorizonte desenvolve soluções que
                        transformam dados em insights valiosos, automatizam processos e aumentam a eficiência operacional
                        das empresas.
                    </InformationText>
                </InformationContent>
                <InformationContent>
                    <InformationText number="03" title="Como posso acessar o sistema?" preTitle="COMO ACESSAR">
                        A NovaHorizonte Tecnologia e Inovação é uma empresa fictícia criada para exemplificar um modelo de
                        negócio inovador no setor de tecnologia.
                        Especializada em Inteligência Artificial e Machine Learning, a NovaHorizonte desenvolve soluções que
                        transformam dados em insights valiosos, automatizam processos e aumentam a eficiência operacional
                        das empresas.
                    </InformationText>
                    <InformationImage image="/images/pexels-ayan-biswas-109307294-9631566.jpg"/>
                </InformationContent>
            </div>
        </div>
  );
}

export default App;
