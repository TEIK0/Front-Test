import "./Fotter.css"
import iconCrab from "../assets/icongrab.png";

function Fotter() {
    return(
        <div className="FotterContainer row">
            <p className="FotterText col-2">Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna</p>
            <img src={iconCrab} className="FotterImage col-8"/>
            <p className="FotterRigths col-2">All rigths reserved to Lorem ipsum© 2022</p>
        </div>
    )
}

export default Fotter;