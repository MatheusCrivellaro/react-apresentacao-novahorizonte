import './InformationContent.css'
import InformationText from "../InformationText";
import InformationImage from "../InformationImage";

const InformationContent = ({ children, number, title, preTitle, image, invert }) => {
    return (
        <>
            {
                invert ? (
                    <div className="div-information row">
                        <InformationText number={number} title={title} preTitle={preTitle}>
                            {children}
                        </InformationText>
                        <InformationImage image={image}/>
                    </div>
                ) : (
                    <div className="div-information row">
                        <InformationImage image={image}/>
                        <InformationText number={number} title={title} preTitle={preTitle}>
                            {children}
                        </InformationText>
                    </div>
                )
            }
        </>
    )
}

export default InformationContent;