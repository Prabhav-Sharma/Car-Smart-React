import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookmarkCard } from "../../components";
import { useDocumentTitle, useUserData, useAuth } from "../../hooks";
import { fetchBookmarks } from "../../contexts/Providers/UserDataProvider/helpers";
import "./bookmark.css";

function Bookmark() {
  const { userDataState, userDataDispatch } = useUserData();
  const { bookmarks } = userDataState;
  const {
    authState: { token },
  } = useAuth();

  useDocumentTitle("Bookmarks | CarSmart");

  useEffect(() => {
    fetchBookmarks(token, userDataDispatch);
  }, []);

  const items =
    bookmarks.length === 0 ? (
      <main className="bookmark-main flex-column">
        <h3>Oh no! seems like you haven't bookmarked anything.</h3>
        <h4>Bookmark Items To View Them Here</h4>
        <Link className="btn prim-btn" to={"/products"}>
          View Products
        </Link>
      </main>
    ) : (
      <div className="bookmark-grid grid auto-grid">
        {bookmarks.map((bookmark) => (
          <BookmarkCard key={bookmark._id} prod={bookmark} />
        ))}
      </div>
    );

  return (
    <main className="bookmark-main flex-column">
      <h3 className="bookmark-heading">Your Bookmarks</h3>
      {items}
    </main>
  );
}

export default Bookmark;
