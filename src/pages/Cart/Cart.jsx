import { useEffect, useState } from "react";
import { useUserData, useAuth, useDocumentTitle } from "../../hooks";
import { useNavigate } from "react-router-dom";
import {
  CartCheckout,
  AddressCard,
  AddressModal,
  CartCard,
} from "../../components";
import {
  fetchAddressList,
  fetchCart,
} from "../../contexts/Providers/UserDataProvider/helpers";
import "./cart.css";

function Cart() {
  const {
    userDataState: { cart, addressList },
    userDataDispatch,
  } = useUserData();
  const [showAddressModal, setShowAddressModal] = useState(false);
  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuth();

  const [currentAddress, setCurrentAddress] = useState({ _id: "" });

  useDocumentTitle("Cart | CarSmart");

  useEffect(() => {
    fetchCart(token, userDataDispatch);
    fetchAddressList(token, userDataDispatch);
  }, []);

  const cartElement =
    cart.length !== 0 ? (
      <div className="cart-wrapper grid">
        <section className="items-wrapper flex-column">
          <h5 className="cart-sub-heading">Deliver to:</h5>
          <div className="address-wrapper flex-row">
            {addressList.map((address) => (
              <AddressCard
                key={address._id}
                address={address}
                onClick={() => setCurrentAddress(address)}
                classes={`${
                  currentAddress._id === address._id && "selected-address"
                }`}
              />
            ))}
            <button
              className="add-address-btn"
              onClick={() => setShowAddressModal(true)}
            >
              Add New Address
            </button>
          </div>
          {cart.map((product) => (
            <CartCard key={product._id} prod={product} />
          ))}
        </section>
        <CartCheckout address={currentAddress} />
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
      <AddressModal
        showModalState={{ showAddressModal, setShowAddressModal }}
      />
    </main>
  );
}

export default Cart;
