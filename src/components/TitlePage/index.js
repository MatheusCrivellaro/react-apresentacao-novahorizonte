import './TitlePage.css'
import { FaArrowDown } from "react-icons/fa";

const TitlePage = () => {
    return (
        <div className="title-page">
            <div className="pre-title">
                <div className="linha-title"/>
                <span>APRESENTAÇÂO</span>
            </div>
            <h1>NovaHorizonte</h1>
            <h2>Tecnologia e Inovação</h2>
            <a className="scroll-div" href="#a">
                <span>scroll down</span>
                <FaArrowDown className="scroll-icon"/>
            </a>
        </div>
    )
}

export default TitlePage;