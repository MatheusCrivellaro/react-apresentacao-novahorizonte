import './InformationContent.css'

const InformationContent = ({ children }) => {
    return (
        <div className="div-information row">
            {children}
        </div>
    )
}

export default InformationContent;