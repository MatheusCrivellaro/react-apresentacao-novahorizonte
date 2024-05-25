import './InformationText.css'
import PreTitle from "../PreTitle";
import {IoMdArrowForward} from "react-icons/io";

const InformationText = ({ children, title, preTitle, number }) => {
    return (
        <div className="col-text-information col-7">
            <div className="col-subtext-information">
                <span className="number-information">{number}</span>
                <PreTitle title={preTitle}/>
                <h1 className="title-information">{title}</h1>
                <p className="description-information">
                    {children}
                </p>
                <div className="readmore-information">
                    <span className="text-readmore-information">ler mais</span>
                    <IoMdArrowForward className="icon-readmore-information"/>
                </div>
            </div>
        </div>
    )
}

export default InformationText