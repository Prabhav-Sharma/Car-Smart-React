import React from "react";
import "./bookmark-card.css";
import { Link } from "react-router-dom";
import { useUserData } from "../../../contexts/Providers/UserDataProvider/UserDataProvider";
import { useLoading } from "../../../hooks/useLoading";
import { removeFromBookmarks } from "../../../contexts/Providers/UserDataProvider/helpers";

function BookmarkCard({ prod }) {
  const { userDataDispatch } = useUserData();
  const { loading: bookmarkLoading, setLoading: setBookmarkLoading } =
    useLoading();
  const token = localStorage.getItem("token");

  const removeBookmarkHandler = (id) => {
    removeFromBookmarks(id, token, setBookmarkLoading, userDataDispatch);
  };

  const { title, price, src, _id } = prod;
  return (
    <div className="bookmark-card flex-row">
      <div className="bookmark-img-container">
        <img src={src} />
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
          <Link to={`/product/${_id}`}>
            <button className="bookmark-btn btn prim-btn"> See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookmarkCard;
