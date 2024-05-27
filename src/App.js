import './App.css';
import NavBar from "./components/NavBar";
import TitlePage from "./components/TitlePage";
import InformationContent from "./components/InformationContent";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="container-menu">
            <NavBar/>
            <div className="container-title" id="home">
                <TitlePage/>
                <span className="container-sombra"/>
            </div>
            <div className="container-conteudo" id="sobre">
                <InformationContent number="01" title="O que é a NovaHorizonte?" preTitle="SOBRE"
                                    image="/images/Logo-novaHorizonte-round-background.png" invert={false}>
                    A NovaHorizonte Tecnologia e Inovação é uma empresa fictícia criada para exemplificar um modelo de
                    negócio inovador no setor de tecnologia.
                    Especializada em Inteligência Artificial e Machine Learning, a NovaHorizonte desenvolve soluções que
                    transformam dados em insights valiosos, automatizam processos e aumentam a eficiência operacional
                    das empresas.
                </InformationContent>

                <InformationContent number="02" title="Porquê criamos esse site?" preTitle="OBJETIVO"
                                    image="/images/pexels-packermann-1666021.jpg" invert={true}>
                    O site tem como objetivo apresentar o sistema de gerenciamento de presenças desenvolvido para a
                    NovaHorizonte. Ele serve como um portfólio para demonstrar as funcionalidades e a eficácia do
                    sistema. Além de fornecer uma visão geral do projeto, o site também destaca as tecnologias
                    utilizadas, como Java e Spring Boot, e os benefícios proporcionados pela implementação desse sistema
                    na gestão de treinamentos da empresa. O intuito é mostrar a aplicabilidade prática do sistema e sua
                    contribuição para a melhoria dos processos internos da empresa.
                </InformationContent>

                <InformationContent number="03" title="Do que o sistema é capaz?" preTitle="O QUE FAZ"
                                    image="/images/pexels-eberhardgross-1366919.jpg" invert={false}>
                    O sistema desenvolvido para a NovaHorizonte Tecnologia e Inovação, criado com Java utilizando Spring
                    Boot, tem como principal objetivo gerenciar as presenças dos funcionários nos treinamentos
                    realizados pela empresa. Esse sistema permite que os funcionários confirmem sua presença de maneira
                    eficiente, seja através da leitura de um QR code ou digitando um código específico. Com isso, o
                    sistema valida a presença e gera relatórios de frequência e faltas, facilitando a gestão e
                    acompanhamento dos treinamentos.
                </InformationContent>

                <InformationContent number="04" title="Como posso acessar o sistema?" preTitle="COMO ACESSAR"
                                    image="/images/pexels-ayan-biswas-109307294-9631566.jpg" invert={true}>
                    Na parte superior deste site, você encontrará um botão intitulado 'Sistema', que o direcionará para
                    uma seção dedicada a uma explicação detalhada sobre como o sistema pode ser utilizado e testado de
                    maneira eficaz. Esta seção visa fornecer clareza e oferecer uma experiência satisfatória para todos
                    os usuários que estejam utilizando a plataforma.
                </InformationContent>
                <div className="container-footer" id="contatos">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
