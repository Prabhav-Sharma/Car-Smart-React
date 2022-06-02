import { useNavigate } from "react-router-dom";
import { useProducts, useAuth, useUserData } from "../../hooks";
import { cartCalc } from "./cartCalc";
import { toast } from "react-toastify";
import {
  addOrder,
  clearCart,
} from "../../contexts/Providers/UserDataProvider/helpers";
import "./cart-checkout.css";

function CartCheckout({ address }) {
  const { name, phone } = address;
  const { userDataState, userDataDispatch } = useUserData();
  const { state } = useProducts();
  const { cart } = userDataState;
  const { EMI: EMITenure } = state;
  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuth();

  const interestRate = 8;

  const {
    cartMRP,
    cartDiscount,
    downPayment,
    cartEMI,
    totalInterest,
    finalAmount,
  } = cartCalc(cart, interestRate, EMITenure);

  const loadScript = async (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_ID,
      currency: "INR",
      amount: downPayment * 100,
      name: "CarSmart",
      description: "Book your ride",
      handler: async function (response) {
        const paymentId = response.razorpay_payment_id;
        const orderId = String(Math.floor(Math.random() * 10000));

        const order = {
          paymentId,
          orderId,
          amountPaid: downPayment,
          orderedProducts: [...cart],
          deliveryAddress: { ...address },
        };
        await addOrder(order, token, userDataDispatch);
        await clearCart(token, userDataDispatch);
        navigate(`/order/${orderId}`);

        toast.success("Order Successful");
      },

      prefill: {
        name: name,
        email: "test@email.com",
        contact: phone,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const placeOrderHandler = () => {
    if (!name || !phone) {
      toast.info("Select an address to proceed!");
      return;
    }
    displayRazorpay();
  };

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
        <h5>₹ {downPayment.toLocaleString()}</h5>
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
        <h5>₹ {downPayment.toLocaleString()}</h5>
      </span>
      <button className="btn prim-btn" onClick={placeOrderHandler}>
        Proceed to pay
      </button>
    </section>
  );
}

export default CartCheckout;
