import React, { useEffect } from "react";
import CartCard from "../../components/Card/CartCard/CartCard";
import { fetchCart } from "../../contexts/Providers/UserDataProvider/helpers";
import { useUserData } from "../../contexts/Providers/UserDataProvider/UserDataProvider";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/Providers/ProductProvider/ProductProvider";
import "./cart.css";
import CartCheckout from "../../components/CartCheckout/CartCheckout";

function Cart() {
  const { userDataState, userDataDispatch } = useUserData();
  const { cart } = userDataState;

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useDocumentTitle("Cart | CarSmart");

  useEffect(() => {
    fetchCart(token, userDataDispatch);
  }, []);

  const cartElement =
    cart.length !== 0 ? (
      <div className="cart-wrapper grid">
        <section className="items-wrapper flex-column">
          {cart.map((product) => (
            <CartCard key={product._id} prod={product} />
          ))}
        </section>
        <CartCheckout />
      </div>
    ) : (
      <section className="items-wrapper flex-column">
        <h3 className="cart-heading">
          Oh no! seems like the cart is currently empty.
        </h3>
        <button
          className="btn prim-btn products-btn"
          onClick={() => navigate("/products")}
        >
          Add products
        </button>
      </section>
    );

  return (
    <main>
      <h3 className="cart-heading">My Cart</h3>
      {cartElement}
    </main>
  );
}

export default Cart;
