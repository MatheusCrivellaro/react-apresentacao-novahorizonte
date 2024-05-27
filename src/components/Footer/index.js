import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="div-contatos row">
            <div className="nome-contatos col-12 col-md-6">
                <div className="nome-contatos-text">
                    <h1>Matheus</h1>
                    <h2>Crivellaro</h2>
                </div>
                <h3>Programador Full Stack</h3>
            </div>
            <div className="informacoes-contatos col-12 col-md-6">
                <div className="div-icons-contatos">
                    <a href="https://linkedin.com/in/matheus-crivellaro" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="contatos-icon"/>
                    </a>
                    <a href="https://github.com/MatheusCrivellaro" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="contatos-icon"/>
                    </a>
                </div>
                <div>
                    <p>matheuscriv@gmail.com</p>
                    <p>11 947777090</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;