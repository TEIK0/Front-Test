import "./LatestVideos.css";
import Video2 from "../assets/Pic2.png";
import Video3 from "../assets/Pic3.png";
import { FaRegPlayCircle } from "react-icons/fa";

function LatestVideos() {
    return(
        <div className="LatestVideosContainer">
            <center><h1 className="LatestVideosTitle">Latest videos</h1></center>
            <div className="row VideosRow">
                <div className="col Video">
                    <img src={Video2} className="VideoShow"/>
                    <FaRegPlayCircle className="VideoIcon"/>
                    <p className="VideoText">Lorem ipsum dolor sit amet, consetetur</p>
                </div>
                <div className="col Video">
                    <img src={Video3} className="VideoShow"/>
                    <FaRegPlayCircle className="VideoIcon"/>
                    <p className="VideoText">Lorem ipsum dolor sit amet, consetetur</p>
                </div>
                <div className="col Video">
                    <img src={Video2} className="VideoShow"/>
                    <FaRegPlayCircle className="VideoIcon"/>
                    <p className="VideoText">Lorem ipsum dolor sit amet, consetetur</p>
                </div>
            </div>
            <div className="row VideosRow BottonRow">
                <div className="col Video">
                    <img src={Video2} className="VideoShow"/>
                    <FaRegPlayCircle className="VideoIcon"/>
                    <p className="VideoText">Lorem ipsum dolor sit amet, consetetur</p>
                </div>
                <div className="col Video">
                    <img src={Video3} className="VideoShow"/>
                    <FaRegPlayCircle className="VideoIcon"/>
                    <p className="VideoText">Lorem ipsum dolor sit amet, consetetur</p>
                </div>
                <div className="col Video">
                    <img src={Video2} className="VideoShow"/>
                    <FaRegPlayCircle className="VideoIcon"/>
                    <p className="VideoText">Lorem ipsum dolor sit amet, consetetur</p>
                </div>
            </div>
            <h1 className="row ViewAll"><center>VIEW ALL</center></h1>
        </div>
    )
}

export default LatestVideos;