import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOrderById } from "../../contexts/Providers/UserDataProvider/helpers";
import { useAuth, useDocumentTitle } from "../../hooks";
import { CartCard, AddressCard } from "../../components";
import styles from "./Order.module.css";

function Order() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(undefined);
  const {
    authState: { token },
  } = useAuth();
  const navigate = useNavigate();

  useDocumentTitle("Order | CarSmart");

  useEffect(() => {
    fetchOrderById(orderId, token, setOrder);
  }, [orderId]);

  return (
    <section className={styles.section}>
      {order ? (
        <>
          <h1 className={styles.success_msg}>
            Yay! Order Placed Successfully 🥳
          </h1>
          <div className={styles.order_details}>
            <h1>Order Item(s) ({order.orderedProducts.length})</h1>
            <h1>
              Amount:
              <span className={styles.highlight}>
                ₹{order.amountPaid.toLocaleString()}
              </span>
            </h1>
          </div>
          <h5 className={styles.order_id}>Order ID:#{order.orderId}</h5>
          <div className={styles.products_wrapper}>
            <div className="flex flex-col">
              {order.orderedProducts.map((product) => (
                <CartCard key={product._id} prod={product} dynamic={false} />
              ))}
            </div>
            <div>
              <h5>Delivering To:</h5>
              <AddressCard address={order.deliveryAddress} />
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className={styles.loading_message}>Loading your order!</h3>
          <div className={styles.loading_img_container}>
            <img
              className={styles.loading_img}
              src="https://res.cloudinary.com/carsmart/image/upload/v1648102604/d43c11d76c7db33af616426597e88833_onntyl.gif"
              alt="Loading"
            />
          </div>
        </>
      )}
      <button
        className={`btn prim-btn products-btn ${styles.products_btn}`}
        onClick={() => navigate("/products")}
      >
        Continue Shopping
      </button>
    </section>
  );
}

export default Order;
