import { PiBroadcastFill } from "react-icons/pi";
import { FaRegCirclePlay } from "react-icons/fa6";
import "./LiveAndJoin.css"

function LiveAndJoin() {
    return(
        <div className="row LJContainer"><center>
            <div className="LiveContainer"><h1 className="col live">Live <PiBroadcastFill/></h1></div>
            <div className="LoremContainer"><h1 className="col LJLorem">Lorem ipsum dolor sit amet</h1></div>
            <div className="JoinContainer"><h1 className="col Join">Join Now!<FaRegCirclePlay className="PlayIcon"/></h1></div>
        </center></div>
    )
}

export default LiveAndJoin;