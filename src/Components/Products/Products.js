import "./Products.css";
import Pic7 from "../assets/Pic7.png";
import Pic8 from "../assets/Pic8.png";
import Pic9 from "../assets/Pic9.png";
import Pic10 from "../assets/Pic10.png";

function Products() {
    return(
        <div className="ProductsContainer">
            <h1 className="ProductsTitle">Lorem ipsum dolor sit amet</h1>
            <div className="row ProductsRow">
                <div className="Item col">
                    <img src={Pic7} className="ItemImage"/>
                </div>
                <div className="Item col">
                    <img src={Pic8} className="ItemImage"/>
                </div>
                <div className="Item col">
                    <img src={Pic9} className="ItemImage"/> 
                </div>
            </div>
            <div className="ItemsButtons row">
                <div className="FullCircle col-4"/>
                <div className="EmptyCircle col-4"/>
                <div className="EmptyCircle col-4"/>
            </div>
            <h1 className="row ProductsButton"><center>VIEW ALL</center></h1>
        </div>
    )
}

export default Products;