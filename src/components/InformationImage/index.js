import './InformationImage.css'

const InformationImage = ({ image }) => {
    return (
        <div className="col-image-information col-12 col-md-4">
            <img src={image} alt=""/>
        </div>
    )
}

export default InformationImage;