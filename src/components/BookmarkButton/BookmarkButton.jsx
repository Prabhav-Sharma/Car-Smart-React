import React from "react";
import { useLoading } from "../../hooks/useLoading";
import { useAuth } from "../../contexts/Providers/AuthProvider/AuthProvider";
import { useUserData } from "../../contexts/Providers/UserDataProvider/UserDataProvider";
import {
  removeFromBookmarks,
  addToBookmarks,
} from "../../contexts/Providers/UserDataProvider/helpers";
import { toast } from "react-toastify";

function BookmarkButton({ prod, classes }) {
  const {
    authState: { token, isAuthenticated },
  } = useAuth();
  const { loading: bookmarkLoading, setLoading: setBookmarkLoading } =
    useLoading();
  const { userDataState, userDataDispatch } = useUserData();
  const { bookmarks } = userDataState;

  const addBookmarkHandler = (product) => {
    if (!isAuthenticated) {
      toast.info("Need to login first");
      return;
    }
    addToBookmarks(product, token, setBookmarkLoading, userDataDispatch);
  };

  const removeBookmarkHandler = (id) => {
    if (!isAuthenticated) {
      toast.info("Need to login first");
      return;
    }
    removeFromBookmarks(id, token, setBookmarkLoading, userDataDispatch);
  };

  const buttonElement = bookmarks.some(
    (bookmark) => bookmark._id === prod._id
  ) ? (
    <button onClick={() => removeBookmarkHandler(prod._id)} className={classes}>
      {bookmarkLoading ? <i className="fa fa-spinner fa-spin" /> : "Bookmarked"}
    </button>
  ) : (
    <button onClick={() => addBookmarkHandler(prod)} className={classes}>
      {bookmarkLoading ? <i className="fa fa-spinner fa-spin" /> : "Bookmark"}
    </button>
  );

  return buttonElement;
}

export { BookmarkButton };
