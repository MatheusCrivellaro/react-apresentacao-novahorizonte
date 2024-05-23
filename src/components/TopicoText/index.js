import './TopicoText.css'
import {FaArrowDown} from "react-icons/fa";

const TopicoText = () => {
    return (
        <div>
            <div className="title-page">
                <div className="pre-title">
                    <div className="linha-title"/>
                    <span>APRESENTAÇÂO</span>
                </div>
                <h1>NovaHorizonte</h1>
                <h2>Tecnologia e Inovação</h2>
                <div className="scroll-div">
                    <span>scroll down</span>
                    <FaArrowDown className="scroll-icon"/>
                </div>
            </div>
        </div>
    )
}

export default TopicoText;