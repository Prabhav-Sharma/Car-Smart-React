import React from "react";
import { cartCalc } from "./cartCalc";
import { useUserData } from "../../contexts/Providers/UserDataProvider/UserDataProvider";
import { useProducts } from "../../contexts/Providers/ProductProvider/ProductProvider";
import "./cart-checkout.css";

function CartCheckout() {
  const { userDataState } = useUserData();
  const { state } = useProducts();
  const { cart } = userDataState;
  const { EMI: EMITenure } = state;

  const interestRate = 8;

  const {
    cartMRP,
    cartDiscount,
    downPayment,
    cartEMI,
    totalInterest,
    finalAmount,
  } = cartCalc(cart, interestRate, EMITenure);

  return (
    <section className="checkout-container flex-column">
      <h5 className="para para-s">Price Details: {cart.length} item(s)</h5>
      <span className="flex-row">
        <p className="para-s">Total MRP</p>
        <h5>₹ {cartMRP}</h5>
      </span>
      <span className="flex-row">
        <p className="para-s">Discount</p>
        <h5>₹ {cartDiscount}</h5>
      </span>
      <span className="flex-row">
        <p className="para-s">Down payment</p>
        <h5>₹ {downPayment}</h5>
      </span>
      <span className="flex-row">
        <p className="para-s">EMI Tenure</p>
        <h5>{EMITenure / 12} years</h5>
      </span>
      <span className="flex-row">
        <p className="para-s">EMI</p>
        <h5>₹ {cartEMI} </h5>
      </span>
      <span className="flex-row">
        <p className="para-s">Interest at {interestRate}%</p>
        <h5>₹ {totalInterest}</h5>
      </span>
      <span className="flex-row">
        <p className="para-s">Total Amount</p>
        <h5>₹ {finalAmount}</h5>
      </span>
      <span className="flex-row">
        <p className="para-s">Pay Now</p>
        <h5>₹ {downPayment}</h5>
      </span>
      <button className="btn prim-btn">Proceed to pay</button>
    </section>
  );
}

export default CartCheckout;
