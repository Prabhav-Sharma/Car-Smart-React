import React from 'react'
import { Link } from 'react-router-dom';
import "./product-card.css"
import {useAuth} from "../../../contexts/Providers/AuthProvider/AuthProvider";
import { useBookmarks } from '../../../contexts/Providers/BookmarksProvider/BookmarksProvider';
import {useLoading} from "../../../hooks/useLoading";
import {removeFromBookmarks, addToBookmarks} from "../../../contexts/Providers/BookmarksProvider/helpers";
import {BookmarkButton} from "../../BookmarkButton/BookmarkButton";

function ProductCard({info, EMI}) {
  const {title, price, src, _id} = info.prod;
  const {display, computable}=  price;  
  const calcEMI= Math.round(computable/EMI);

  return (
    <div className="card  flex-column">
      <Link to={`/product/${_id}`}>
                <div className="img-container">
                    <img className="prod-img" alt="Product Image"
                        src={src}/>
                </div>
                <div className="text-container flex-column">
                    <p className="prod-title">{title}</p>
                    <p className="prod-cost">{display}</p>
                    <p className="para-s gray-text">EMI starts at ₹{calcEMI.toLocaleString()}/month</p>
                </div>
                </Link>
                <div className="card-btns flex-row">
                    <BookmarkButton classes={"btn prim-acc-btn"} prod={info.prod}/>
                    <button className="btn prim-btn">Book Now</button>
                </div>
                </div>
  )
}

export default ProductCard;