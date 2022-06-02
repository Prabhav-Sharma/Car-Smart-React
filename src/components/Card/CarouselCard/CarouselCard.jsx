import { Link } from "react-router-dom";
import "./carousel-card.css";

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
