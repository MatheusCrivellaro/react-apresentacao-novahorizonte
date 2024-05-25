import './PreTitle.css'

const PreTitle = ({ title }) => {
    return (
        <div className="div-pre-title">
            <div className="linha-pre-title"/>
            <span className="text-pre-title">{title}</span>
        </div>
    )
}

export default PreTitle