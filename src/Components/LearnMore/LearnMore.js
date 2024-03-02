import "./LearnMore.css";
import image2 from "../assets/Pic2.png";
import image3 from "../assets/Pic3.png";
import image4 from "../assets/Pic4.png";

function LearnMore() {
    return(
        <div className="LearnMoreContainer">
            <center><h1 className="LearnMoreTitle">Lorem ipsum</h1></center>
            <center><p className="LeanrMoreText">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </p></center>
            <div className="row exampleContainer">
                <div className="example">
                    <img src={image2} className="LeanrMoreImage"/>
                    <div className="ExampleTextContainer">
                        <h1 className="ExampleText">LOREM IPSUM</h1>
                    </div>
                </div>
                <div className="example">
                    <img src={image3} className="LeanrMoreImage"/>
                    <div className="ExampleTextContainer">
                        <h1 className="ExampleText">LOREM IPSUM</h1>
                    </div>
                </div>
                <div className="example">
                    <img src={image4} className="LeanrMoreImage"/>
                    <div className="ExampleTextContainer">
                        <h1 className="ExampleText">LOREM IPSUM</h1>
                    </div>
                </div>
            </div>
            <center><div className="LearnMoreButton">
                <h1 className="LearnMoreText">LEARN MORE</h1>
            </div></center>
        </div>
    )
}

export default LearnMore;