import React from 'react'
import "./bookmark.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import BookmarkCard from '../../components/Card/BookmarkCard/BookmarkCard';
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import { useBookmarks } from '../../contexts/Providers/BookmarksProvider/BookmarksProvider';

function Bookmark() {
const token = localStorage.getItem("token");
const {bookmarksState, bookmarksDispatch} = useBookmarks();
const {bookmarks} = bookmarksState; 


useDocumentTitle("Bookmarks | CarSmart");

useEffect(()=>{

    (async ()=>{
        try{
            const response=await axios({
                method:"get",
                url:"/api/user/wishlist",
                headers:{authorization: token}
            });
            bookmarksDispatch({type:"FETCH_BOOKMARKS", payload:response.data.wishlist});

        }catch(e){
            console.log(e);
        }

    })();

},[]);

const items = 
bookmarks.length===0? <main className='bookmark-main flex-column'>
    <h3>Oh no! seems like you haven't bookmarked anything.</h3>
    <h4>Bookmark Items To View Them Here</h4>
    <Link className='btn prim-btn' to={"/products"}>View Products</Link>
        </main> : <div className='bookmark-grid grid auto-grid'>
       {bookmarks.map(bookmark=> <BookmarkCard key={bookmark._id} prod={bookmark}/>)}
         </div>;

  return (
    <main className='bookmark-main flex-column'>
        <h3 className="bookmark-heading">Your Bookmarks</h3>
           {items}
    </main>
  )
}

export default Bookmark