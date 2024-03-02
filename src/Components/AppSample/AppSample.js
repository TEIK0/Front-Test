import "./AppSample.css"
import background from "../assets/Pic6.png";

function AppSample() {
    return(
        <div className="AppSampleContainer row" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover',}}>
            <div className="AppSampleDescriptionContainer col">
                <h1 className="AppSampleTitle">Lorem ipsum dolor sit</h1>
                <p className="AppSampleDescription">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.</p>
                <h1 className="AppSampleButton">VIEW ALL</h1>
            </div>
        </div>
    )
}

export default AppSample;