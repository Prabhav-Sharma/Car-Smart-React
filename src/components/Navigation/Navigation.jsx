import "./navigation.css";
import {Link} from "react-router-dom";

const Navigation=()=>{
    return (<nav className="nav-row flex-row">
    <div className="nav-logo flex-row">
        <Link to="/" className="nav-title flex-row">
            <h2>Car</h2>
            <h2 className="title-highlight">Smart</h2>
        </Link>
    </div>
    <input placeholder="Search" className="search-input input-m input-round-border"/>
    <div className="nav-links links-top flex-row">
        <Link className="nav-link" to="/login"><button className="btn prim-btn btn-round">Login</button></Link>
        <Link className="nav-link" to="/bookmark"><img className="icon nav-icon"
                src="https://res.cloudinary.com/carsmart/image/upload/v1647404723/icons/bookmark_chopzg.png"/></Link>
        <Link className="nav-link" to="/compare"><img className="icon nav-icon"
                src="https://res.cloudinary.com/carsmart/image/upload/v1647404724/icons/compare_yzogng.png"/></Link>
        <Link className="nav-link" to="/booking"><img className="icon nav-icon" src="https://res.cloudinary.com/carsmart/image/upload/v1647404724/icons/cart_ovd0is.png"/></Link>
    </div>
</nav>)
}

export default Navigation;