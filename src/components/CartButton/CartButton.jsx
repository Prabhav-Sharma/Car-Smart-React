import React from "react";
import { useUserData } from "../../contexts/Providers/UserDataProvider/UserDataProvider";
import {
  addToCart,
  deleteFromCart,
} from "../../contexts/Providers/UserDataProvider/helpers";
import { useAuth } from "../../contexts/Providers/AuthProvider/AuthProvider";
import { useLoading } from "../../hooks/useLoading";

function CartButton({ prod, classes, btnText = "Remove" }) {
  const { userDataState, userDataDispatch } = useUserData();
  const { authState } = useAuth();
  const { loading: cartLoading, setLoading: setCartLoading } = useLoading();
  const { cart } = userDataState;
  const token = localStorage.getItem("token");

  const addItemToCart = () => {
    if (!authState.isAuthenticated) {
      alert("Need to login first");
      return;
    }
    addToCart(token, prod, setCartLoading, userDataDispatch);
  };

  const removeItemFromCart = () => {
    if (!authState.isAuthenticated) {
      alert("Need to login first");
      return;
    }
    deleteFromCart(token, prod._id, userDataDispatch, setCartLoading);
  };

  const button = cart.some((product) => product.id === prod.id) ? (
    <button onClick={() => removeItemFromCart()} className={classes}>
      {cartLoading ? <i className="fa fa-spinner fa-spin" /> : btnText}
    </button>
  ) : (
    <button onClick={() => addItemToCart()} className={classes}>
      {cartLoading ? <i className="fa fa-spinner fa-spin" /> : "Add to Cart"}
    </button>
  );

  return button;
}

export default CartButton;
