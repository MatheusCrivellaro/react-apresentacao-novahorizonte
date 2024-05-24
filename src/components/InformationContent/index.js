import './InformationContent.css'
import { FaArrowRightLong } from "react-icons/fa6";

const InformationContent = () => {
    return (
        <div className="div-information">
            <div className="pre-title-information">
                <div className="linha-pre-title-information"/>
                <span className="text-pre-title-information">SOBRE NÓS</span>
            </div>
            <h1 className="title-information">O que é a NovaHorizonte?</h1>
            <p className="description-information">
                A NovaHorizonte Tecnologia e Inovação é uma empresa fictícia criada para exemplificar um modelo de
                negócio inovador no setor de tecnologia.
                Especializada em Inteligência Artificial e Machine Learning, a NovaHorizonte desenvolve soluções que
                transformam dados em insights valiosos, automatizam processos e aumentam a eficiência operacional
                das empresas.
            </p>
            <div className="readmore-information">
                <span className="text-readmore-information">ler mais</span>
                <FaArrowRightLong className="icon-readmore-information"/>
            </div>
        </div>
    )
}

export default InformationContent;