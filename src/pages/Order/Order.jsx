import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOrderById } from "../../contexts/Providers/UserDataProvider/helpers";
import { useAuth } from "../../contexts/Providers/AuthProvider/AuthProvider";
import CartCard from "../../components/Card/CartCard/CartCard";
import styles from "./Order.module.css";

function Order() {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const {
    authState: { token },
  } = useAuth();

  useEffect(() => {
    fetchOrderById(orderId, token, setOrder);
  }, [orderId]);

  return (
    <div>
      <h1 className={styles.success_msg}>Order Placed Successfully 🥳</h1>
      {Object.keys(order).length !== 0 && (
        <div>
          <h1>Payment Id: {order.paymentId}</h1>
          {order.orderedProducts.map((product) => (
            <CartCard key={product._id} prod={product} dynamic={false} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Order;
