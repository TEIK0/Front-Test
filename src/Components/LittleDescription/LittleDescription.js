import "./LittleDescription.css"
import image from "../assets/Pic1.png";

function LittleDescription() {
    return(
        <div className="row LittleDescriptionContainer">
            <div className="col-11 DescriptionTextContainer">
                <h1 className="row DescriptionTitle">Lorem ipsum dolor sit amet</h1>
                <p className="row DescriptionP">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
            </div>
            <div className="col-1"><img className="DescriptionImg" src={image}/></div>
        </div>
    )
}

export default LittleDescription;