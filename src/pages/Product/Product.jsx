import React from 'react'
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import "./product.css";
import { useProducts } from '../../contexts/Providers/ProductProvider/ProductProvider';
import loadingProduct from './loadingProduct';
import CategoryDisplay from '../../components/CategoryDisplay/CategoryDisplay';
import {BookmarkButton} from "../../components/BookmarkButton/BookmarkButton";
import {MANUFACTURE_IMG, TYPE_IMG, MILEAGE_IMG, ENGINE_IMG, BHP_IMG, RATING_IMG, SEAT_IMG, TRANSMISSION_IMG, SERVICECOST_IMG} from "./CATEGORY_CONSTANTS";
function Product() {
    const params= useParams();
    const [product, setProduct] = useState(loadingProduct);
    const {state, dispatch} = useProducts();
    const {id}= params;
    const {EMI} = state;
    const {title, price, rating, categoryName, src, brand, specs } = product;
    const {mileage,
        engine,
        BHP,
        transmission,
        seats,
        serviceCost
    } = specs;


    useDocumentTitle("Product | CarSmart");
    
    useEffect(()=>{
        try{
            (async ()=>{
                let response= await axios.get(`/api/products/${id}`);
                if(response.data.product !== null){
                    setProduct(product=>({...product, ...response.data.product}));
           return;
        }
        alert("404: This item must be on a secret menu as we don't know about it")
        })();
    }catch(e){
        alert("Whoops! this wasn't supposed to happen.");
        console.log(e);
    }
    },[product.title]);

return (   
  <div className="prod-card">
      <div className='flex-row prod-top-wrapper'>
          <div className='prod-img-container'>
              <img src={src}/>
          </div>
          <div className='flex-column price-container'>
              <h2>{title}</h2>
              <h3>Ex Showroom Price:  {price.display}</h3>
              <div className='flex-column dropdown'>
              <h4> EMI starting from ₹{Math.floor(price.computable/EMI).toLocaleString()} for {EMI} months ▼ </h4>
              <div className='dropdown-content'>
                  <button className='btn prim-btn' onClick={() => dispatch({ type: "EMI", EMI: 36 })}>3 years</button>
                  <button className='btn prim-btn' onClick={() => dispatch({ type: "EMI", EMI: 48 })}>4 years</button>
                  <button className='btn prim-btn' onClick={() => dispatch({ type: "EMI", EMI: 60 })}>5 years</button>
                  <button className='btn prim-btn' onClick={() => dispatch({ type: "EMI", EMI: 72 })}>6 years</button>
                  <button className='btn prim-btn' onClick={() => dispatch({ type: "EMI", EMI: 84 })}>7 years</button>
              </div>
              </div>
              <div className=' flex-column btn-wrapper'>
                  <BookmarkButton prod={product} classes={"btn product-btn prim-acc-btn"} />
              <button className='btn product-btn prim-btn'>Book Now</button>
              </div>
          </div>
      </div>
<div className=" grid auto-grid category-wrapper">
    <CategoryDisplay src={MANUFACTURE_IMG} value={brand} title={"Manufacturer"} />
    <CategoryDisplay src={TYPE_IMG} value={categoryName} title={"Type"} />
    <CategoryDisplay src={MILEAGE_IMG} value={mileage} title={"Mileage"} />
    <CategoryDisplay src={ENGINE_IMG} value={engine} title={"Engine"} />
    <CategoryDisplay src={BHP_IMG} value={BHP} title={"BHP"} />
    <CategoryDisplay src={RATING_IMG} value={rating} title={"Rating"} />
    <CategoryDisplay src={SEAT_IMG} value={seats} title={"Seats"} />
    <CategoryDisplay src={TRANSMISSION_IMG} value={transmission} title={"Transmission"} />
    <CategoryDisplay src={SERVICECOST_IMG} value={serviceCost} title={"Service Cost"} />
      </div>
  </div>
)
}

export default Product