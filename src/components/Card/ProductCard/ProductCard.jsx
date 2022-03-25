import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./product-card.css"
import {useAuth} from "../../../contexts/Providers/AuthProvider/AuthProvider";
import axios from "axios";
import { useBookmarks } from '../../../contexts/Providers/BookmarksProvider/BookmarksProvider';
import {useLoading} from "../../../hooks/useLoading";

function ProductCard({info, EMI}) {
  const {authState} = useAuth();
  const {bookmarksState, bookmarksDispatch} = useBookmarks();
  const {loading:bookmarkLoading, setLoading:bookmarkSetLoading} = useLoading();
  const {title, price, src, _id} = info.prod;
  const {display, computable}=  price;  
  const calcEMI= Math.round(computable/EMI);

  const {bookmarks} = bookmarksState;

  const addToBookmarks= async (product)=>{
   if(!authState.isAuthenticated){
     alert("Need to login first");
     return;
   }
   bookmarkSetLoading(true);
     try{
       const token=localStorage.getItem("token");
       const response= await axios({
       method:"post",
       url:"/api/user/wishlist",
       headers:{authorization:token},
       data:{product:product}
    });
    bookmarkSetLoading(false);
    bookmarksDispatch ({type:"ADD_TO_BOOKMARKS", payload:response.data.wishlist});
}catch(e){
    console.log(e);
    bookmarkSetLoading(false);
}
    }

const removeFromBookmarks=async(id)=>{
  bookmarkSetLoading(true);
    try{
     const response= await axios({
         method:"DELETE",
         url:`/api/user/wishlist/${id}`,
         headers:{authorization:localStorage.getItem("token")}
     });
     bookmarkSetLoading(false);
     bookmarksDispatch({type:"REMOVE_FROM_BOOKMARKS", payload:response.data.wishlist})
    }catch(e){
        console.log(e)
        bookmarkSetLoading(false);
    }

  }

const bookmarkBtn= bookmarks.some(bookmark=> bookmark._id===_id) ? 
<button onClick={()=> removeFromBookmarks(_id)} className="btn prim-acc-btn">{bookmarkLoading?<i className="fa fa-spinner fa-spin"/>:"Bookmarked"}</button>:
<button onClick={()=> addToBookmarks(info.prod)} className="btn prim-acc-btn">{bookmarkLoading?<i className="fa fa-spinner fa-spin"/>:"Bookmark"}</button> ;

  return (
    <div className="card  flex-column">
                <div className="img-container">
                    <img className="prod-img" alt="Product Image"
                        src={src}/>
                </div>
                <div className="text-container flex-column">
                    <p className="prod-title">{title}</p>
                    <p className="prod-cost">{display}</p>
                    <p className="para-s gray-text">EMI starts at ₹{calcEMI.toLocaleString()}/month</p>
                </div>
                <div className="card-btns flex-row">
                    {bookmarkBtn}
                    <button className="btn prim-btn">Book Now</button>
                </div>
                </div>
  )
}

export default ProductCard;