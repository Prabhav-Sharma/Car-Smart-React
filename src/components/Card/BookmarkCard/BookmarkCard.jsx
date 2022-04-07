import React from "react";
import "./bookmark-card.css";
import { Link } from "react-router-dom";
import { useUserData } from "../../../contexts/Providers/UserDataProvider/UserDataProvider";
import { useLoading } from "../../../hooks/useLoading";
import { removeFromBookmarks } from "../../../contexts/Providers/UserDataProvider/helpers";
import CartButton from "../../CartButton/CartButton";
import { useAuth } from "../../../contexts/Providers/AuthProvider/AuthProvider";

function BookmarkCard({ prod }) {
  const { userDataDispatch } = useUserData();
  const { loading: bookmarkLoading, setLoading: setBookmarkLoading } =
    useLoading();

  const {
    authState: { token },
  } = useAuth();

  const removeBookmarkHandler = (id) => {
    removeFromBookmarks(id, token, setBookmarkLoading, userDataDispatch);
  };

  const { title, price, src, _id } = prod;
  return (
    <div className="bookmark-card flex-row">
      <div className="bookmark-img-container">
        <Link to={`/product/${_id}`}>
          <img src={src} />
        </Link>
      </div>

      <div className="bookmark-right flex-column">
        <div className="bookmark-text flex-column">
          <h3>{title}</h3>
          <h4>{price.display}</h4>
        </div>
        <div className="bookmark-btns flex-column">
          <button
            className="bookmark-btn btn gray-btn"
            onClick={() => removeBookmarkHandler(_id)}
          >
            {bookmarkLoading ? (
              <i className="fa fa-spinner fa-spin" />
            ) : (
              "Remove From Bookmarks"
            )}
          </button>
          <CartButton
            classes={"btn bookmark-btn prim-btn"}
            prod={prod}
            btnText={"Remove from Cart"}
          />
        </div>
      </div>
    </div>
  );
}

export default BookmarkCard;
