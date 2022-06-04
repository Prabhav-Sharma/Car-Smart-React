import { Link } from "react-router-dom";
import { BookmarkButton, CartButton } from "../../.";
import "./product-card.css";

function ProductCard({ info, EMI }) {
  const { title, price, src, _id } = info.prod;
  const { display, computable } = price;
  const calcEMI = Math.round(computable / EMI);

  return (
    <div className="card  flex-column">
      <Link to={`/product/${_id}`}>
        <div className="img-container">
          <img className="prod-img" alt="Product Image" src={src} />
        </div>
        <div className="text-container flex-column">
          <p className="prod-title">{title}</p>
          <p className="prod-cost">{display}</p>
          <p className="para-s gray-text">
            EMI starts at ₹{calcEMI.toLocaleString()}/month
          </p>
        </div>
      </Link>
      <div className="card-btns flex-row">
        <BookmarkButton classes={"btn prim-acc-btn"} prod={info.prod} />
        <CartButton prod={info.prod} classes={"btn prim-btn"} />
      </div>
    </div>
  );
}

export default ProductCard;
