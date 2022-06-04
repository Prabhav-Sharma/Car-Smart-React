import { useLoading, useAuth, useUserData } from "../../hooks";
import {
  addToCart,
  deleteFromCart,
} from "../../contexts/Providers/UserDataProvider/helpers";
import { toast } from "react-toastify";

function CartButton({ prod, classes, btnText = "Remove" }) {
  const { userDataState, userDataDispatch } = useUserData();
  const {
    authState: { isAuthenticated, token },
  } = useAuth();
  const { loading: cartLoading, setLoading: setCartLoading } = useLoading();
  const { cart } = userDataState;

  const addItemToCart = () => {
    if (!isAuthenticated) {
      toast.info("Need to login first");
      return;
    }
    addToCart(token, prod, setCartLoading, userDataDispatch);
  };

  const removeItemFromCart = () => {
    if (!isAuthenticated) {
      toast.info("Need to login first");
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
