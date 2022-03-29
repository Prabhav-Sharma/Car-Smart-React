import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../../contexts/Providers/ProductProvider/ProductProvider";
import "./arrival-card.css";

function ArrivalCard({ text }) {
  const { state } = useProducts();
  const { products } = state;

  const arrivalMessages = [
    "The cars we drive say a lot about us.",
    "A car for every purse and purpose.",
    "Cargo space? no sir, car stays on the ground",
    "Cars bring me sheer joy",
    "Cars are the reason we, you know, people live or die",
    "All of those cars were once just a dream in somebody’s head",
  ];

  const randomIndex = Math.floor(Math.random() * products.length);
  const randomProduct = products[randomIndex];

  return (
    <Link to={`product/${randomProduct?._id}`}>
      <div className="arrival-card flex-row">
        <img className="arrival-card-img" src={randomProduct?.src} />
        <div className="arrival-card-text flex-column">
          <h5 className="text-gray">New Arrival</h5>
          <div>
            <h2>{randomProduct?.title}</h2>
            <p className="para-s gray-text">
              {
                arrivalMessages[
                  Math.floor(Math.random() * arrivalMessages.length)
                ]
              }
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ArrivalCard;
