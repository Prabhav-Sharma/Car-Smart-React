import React from "react";
import "./carousel-card.css";
import { Link } from "react-router-dom";

function CarouselCard({ src, text }) {
  return (
    <Link to={`/products/${text}`} className="midtext-card">
      <div className="card-midtext">
        <div className="img-container">
          <img src={src} />
        </div>
        <p className="overlay-text">{text}</p>
      </div>
    </Link>
  );
}

export default CarouselCard;
