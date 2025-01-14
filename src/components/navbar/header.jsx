import logo from "../../assets/logo.jpg"
import location from "../../assets/location.png"
import "./header.css"
const Header = () => {
    return ( 
        <div className="header-container" >
            <div className="logo " >
                <img src= {logo} alt="amazon logo" 
                />
            </div>
            <div className="location">
                <img src={location} alt="location" />
                <div className="content">
                <p>Deliver to Rohan</p>
                <h4>MORADABAD 244001</h4>
                </div>
            </div >
            <div className="searchbar">
            <span className="material-icons text-black">search</span>
            </div>
        </div>
     );
}
 
export default Header;