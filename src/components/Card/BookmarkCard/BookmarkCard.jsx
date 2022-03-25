import React from 'react'
import "./bookmark-card.css"
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useBookmarks } from '../../../contexts/Providers/BookmarksProvider/BookmarksProvider';
import {useLoading} from "../../../hooks/useLoading";


function BookmarkCard({prod}) {
    const {bookmarksDispatch} = useBookmarks();
    const {loading:bookmarkLoading, setLoading:setBookmarkLoading} = useLoading();
    const token = localStorage.getItem("token");

    const removeFromBookmarks=async(id)=>{
        setBookmarkLoading(true);
      try{
       const response= await axios({
           method:"DELETE",
           url:`/api/user/wishlist/${id}`,
           headers:{authorization:token}
       });
       setBookmarkLoading(false);
       bookmarksDispatch({type:"REMOVE_FROM_BOOKMARKS", payload:response.data.wishlist})
      }catch(e){
          console.log(e)
          setBookmarkLoading(false);
      }

    }

const {title, price, src, _id} = prod;
  return (
    <div className="bookmark-card flex-row">
                    <div className="bookmark-img-container">
                        <img src={src}/>
                    </div>
                    <div className="bookmark-right flex-column">
                        <div className="bookmark-text flex-column">
                            <h3>{title}</h3>
                            <h4>{price.display}</h4>
                        </div>
                        <div className="bookmark-btns flex-column">
                            <button className="bookmark-btn btn gray-btn" onClick={()=>removeFromBookmarks(_id)}>{bookmarkLoading?<i className="fa fa-spinner fa-spin"/>:"Remove From Bookmarks"}</button>
                            <Link to={`/product/${_id}`}><button className="bookmark-btn btn prim-btn"> See Details</button></Link>
                        </div>
                    </div>
                </div>
  )
}

export default BookmarkCard