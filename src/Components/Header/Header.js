import "./Header.css";
import background from "../assets/Prb_Header.png";
import iconCrab from "../assets/icongrab.png";


function Header() {
    return(
        <div className="HeaderContainer" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover',}}>
            <div>
                <img src={iconCrab} className="Icon"/>
            </div>
            <div className="row LoremHeaderContainer">
                <h1 className="col LoremHeader">LOREM IPSUM</h1>
                <h1 className="col LoremHeader">LOREM IPSUM</h1>
                <h1 className="col LoremHeader">LOREM IPSUM</h1>
                <h1 className="col LoremHeader">LOREM IPSUM</h1>
                <h1 className="col LoremHeader">LOREM IPSUM</h1>
                <h1 className="col LoremHeader">LOREM IPSUM</h1>
            </div>
            <div className="RowsLoremContainer">
                <h1 className="LoremRow">LOREM IPSUM</h1>
                <h1 className="LoremRow LoremRowE">LOREM IPSUM DOLOR</h1>
                <h1 className="LoremRow">LOREM IPSUM</h1>
            </div>
            <h1 className="WhatsNextButton">WHAT IS NEXT</h1>
        </div>
    )
}

export default Header;