import "./navigation.css";
import {Link} from "react-router-dom";
import { useAuth } from "../../contexts/Providers/AuthProvider/AuthProvider";
import { useBookmarks } from "../../contexts/Providers/BookmarksProvider/BookmarksProvider";

const Navigation=()=>{
const {authState, authDispatch} = useAuth();
const {bookmarksState} = useBookmarks();
const {isAuthenticated} = authState;

const {bookmarks} = bookmarksState;


    return (<nav className="nav-row flex-row">
    <div className="nav-logo flex-row">
        <Link to="/" className="nav-title flex-row">
            <h2>Car</h2>
            <h2 className="title-highlight">Smart</h2>
        </Link>
    </div>
    <input placeholder="Search" className="search-input input-m input-round-border nav-input"/>
    <div className="nav-links links-top flex-row">
        {isAuthenticated?<button className="btn prim-btn btn-round" onClick={()=>authDispatch({type:"LOGOUT"})}>Logout</button>:
        <Link className="nav-link" to="/login"><button className="btn prim-btn btn-round">Login</button></Link> }
        <Link className="nav-link" to="/bookmark"><img className="icon nav-icon"
                src="https://res.cloudinary.com/carsmart/image/upload/v1647404723/icons/bookmark_chopzg.png"/>
                <p class="badge-text badge-text-m pos-r pos-t">{bookmarks.length}</p></Link>
        <Link className="nav-link" to="/compare"><img className="icon nav-icon"
                src="https://res.cloudinary.com/carsmart/image/upload/v1647404724/icons/compare_yzogng.png"/></Link>
        <Link className="nav-link" to="/booking"><img className="icon nav-icon" src="https://res.cloudinary.com/carsmart/image/upload/v1647404724/icons/cart_ovd0is.png"/></Link>
    </div>
</nav>)
}

export default Navigation;