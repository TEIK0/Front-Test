import "./JoinUs.css";
import background from "../assets/JoinUs.png";

function JoinUs() {
    return(
        <div className="JoinUsContainer" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover',}}>
            <h1 className="row JoinUsTitle">JOIN US.</h1>
            <p className="row JoinUsSubTitle">Lorem ipsum dolor sit amet, consetetur sadipscing eltir,</p>
            <div className="row RowOfInputs">
                <input className="col ColInput" placeholder="Name"/>
                <input className="col ColInput" placeholder="Surname"/>
            </div>
            <div className="row RowOfInputs">
                <input className="col ColInput" placeholder="Phone"/>
                <input className="col ColInput" placeholder="Email"/>
            </div>
            <input className="row departamentInput" placeholder="Departament"/>
            <textarea className="row MensajeInput" placeholder="Mensaje"/>
            <h1 className="row ImIn"><center>I'M IN</center></h1>
            <p className="AfterIn">Lorem ipsum dolor sit amet, consetetur sadipscing eltir, sed diam nonumy eirmod tempor invidunt ut labore et labore magna aliquyam</p>
        </div>
    )
}

export default JoinUs;