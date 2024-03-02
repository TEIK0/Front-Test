import "./Creator.css";
import CreatorPic from "../assets/Pic5.png";

function Creator() {
    return(
        <div className="CreatorContainer row">
            <div className="CreatorDescriptionContainer col">
                <h1 className="CreatorTitle">Lorem ipsum dolor sit amet, consetetur</h1>
                <h1 className="CreatorFistButton">Lorem ipsum dolor sit</h1>
                <h1 className="CreatorSecondButton">Lorem ipsum dolor sit amet</h1>
            </div>
            <div className="CreatorImageContainer col"><img className="CreatorImage" src={CreatorPic}/></div>
        </div>
    )
}

export default Creator;