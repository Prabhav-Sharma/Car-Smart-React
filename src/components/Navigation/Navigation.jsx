import "./navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Providers/AuthProvider/AuthProvider";
import { useUserData } from "../../contexts/Providers/UserDataProvider/UserDataProvider";
import { ProductSearch } from "../ProductSearch/ProductSearch";

const Navigation = () => {
  const { authState, authDispatch } = useAuth();
  const { userDataState } = useUserData();
  const { isAuthenticated } = authState;
  const navigate = useNavigate();

  const { bookmarks, cart } = userDataState;
  const searchHandler = (e) => {
    navigate(`/product/${JSON.parse(e.target.getAttribute("product"))._id}`);
  };

  return (
    <nav className="nav-row flex-row">
      <div className="nav-logo flex-row">
        <Link to="/" className="nav-title flex-row">
          <h2>Car</h2>
          <h2 className="title-highlight">Smart</h2>
        </Link>
      </div>
      <ProductSearch prodFunc={searchHandler} classes={"search"} />
      <div className="nav-links links-top flex-row">
        {isAuthenticated ? (
          <button
            className="btn prim-btn btn-round"
            onClick={() => authDispatch({ type: "LOGOUT" })}
          >
            Logout
          </button>
        ) : (
          <Link className="nav-link" to="/login">
            <button className="btn prim-btn btn-round">Login</button>
          </Link>
        )}
        <Link className="nav-link" to="/bookmark">
          <img
            className="icon nav-icon"
            src="https://res.cloudinary.com/carsmart/image/upload/v1647404723/icons/bookmark_chopzg.png"
          />
          <p className="badge-text badge-text-m pos-r pos-t">
            {bookmarks.length}
          </p>
        </Link>
        <Link className="nav-link" to="/compare">
          <img
            className="icon nav-icon"
            src="https://res.cloudinary.com/carsmart/image/upload/v1647404724/icons/compare_yzogng.png"
          />
        </Link>
        <Link className="nav-link" to="/cart">
          <img
            className="icon nav-icon"
            src="https://res.cloudinary.com/carsmart/image/upload/v1647404724/icons/cart_ovd0is.png"
          />
          <p className="badge-text badge-text-m pos-r pos-t cart-badge">
            {cart.length}
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
