import React from 'react'
import {useLoading} from "../../hooks/useLoading";
import {useAuth} from "../../contexts/Providers/AuthProvider/AuthProvider";
import {useBookmarks} from "../../contexts/Providers/BookmarksProvider/BookmarksProvider";
import {removeFromBookmarks, addToBookmarks} from "../../contexts/Providers/BookmarksProvider/helpers";


function BookmarkButton({prod, classes}) {
const {authState} = useAuth();
const {loading:bookmarkLoading, setLoading:setBookmarkLoading} = useLoading();
const {bookmarksState, bookmarksDispatch} = useBookmarks();
const {bookmarks} = bookmarksState;
const token=localStorage.getItem("token");

const addBookmarkHandler= (product)=>{
    if(!authState.isAuthenticated){
      alert("Need to login first");
      return;
    }
     addToBookmarks(product, token, setBookmarkLoading, bookmarksDispatch);
     }

const removeBookmarkHandler=(id)=>{
        removeFromBookmarks(id, token, setBookmarkLoading, bookmarksDispatch);
  }


const buttonElement= bookmarks.some(bookmark=> bookmark._id===prod._id) ? 
<button onClick={()=> removeBookmarkHandler(prod._id)} className={classes}>{bookmarkLoading?<i className="fa fa-spinner fa-spin"/>:"Bookmarked"}</button>:
<button onClick={()=> addBookmarkHandler(prod)} className={classes}>{bookmarkLoading?<i className="fa fa-spinner fa-spin"/>:"Bookmark"}</button> ;

  return buttonElement;
}

export {BookmarkButton}