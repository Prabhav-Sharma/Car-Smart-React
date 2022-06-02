import { useReducer } from "react";
import reactDom from "react-dom";
import { GrClose } from "react-icons/gr";
import { addAddress } from "../../contexts/Providers/UserDataProvider/helpers";
import { useAuth, useUserData } from "../../hooks";
import styles from "./AddressModal.module.css";

const addressModalReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "LOCATION":
      return { ...state, location: action.payload };
    case "PHONE":
      return { ...state, phone: action.payload };
    case "PIN":
      return { ...state, pin: action.payload };
    case "COUNTRY":
      return { ...state, country: action.payload };

    case "RESET":
      return {
        name: "",
        location: "",
        phone: "",
        pin: "",
        country: "",
      };
    default:
      return state;
  }
};

function AddressModal({ showModalState }) {
  const { showAddressModal, setShowAddressModal } = showModalState;
  const [modalState, modalDispatch] = useReducer(addressModalReducer, {
    name: "",
    location: "",
    phone: "",
    pin: "",
    country: "",
  });

  const { userDataDispatch } = useUserData();
  const {
    authState: { token },
  } = useAuth();

  if (!showAddressModal) return null;

  const { name, location, phone, pin, country } = modalState;

  const addAddressHandler = async () => {
    const status = await addAddress({ ...modalState }, token, userDataDispatch);
    if (status === "SUCCESS") {
      modalDispatch({ type: "RESET" });
      setShowAddressModal(false);
    }
  };

  const addDummyAddressHandler = async () => {
    const status = await addAddress(
      {
        name: "Sherlock Holmes",
        location: "221B, Baker St, London",
        phone: "9754127859",
        pin: "NW1 6XE",
        country: "United Kingdom",
      },
      token,
      userDataDispatch
    );
    if (status === "SUCCESS") {
      modalDispatch({ type: "RESET" });
      setShowAddressModal(false);
    }
  };

  return reactDom.createPortal(
    <div
      className={styles.modal_wrapper}
      onClick={() => setShowAddressModal(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <p className={styles.input_heading}>Name:</p>
        <input
          className={styles.input}
          placeholder="Deliver to:"
          value={name}
          onChange={(e) =>
            modalDispatch({ type: "NAME", payload: e.target.value })
          }
        />

        <p className={styles.input_heading}>Address: </p>
        <textarea
          className={styles.location}
          placeholder="Location"
          maxLength="175"
          value={location}
          onChange={(e) =>
            modalDispatch({ type: "LOCATION", payload: e.target.value })
          }
        />
        <p className={styles.input_heading}>Phone:</p>
        <input
          className={styles.input}
          placeholder="Contact No."
          value={phone}
          type="number"
          onChange={(e) =>
            modalDispatch({ type: "PHONE", payload: e.target.value })
          }
        />
        <div className={styles.input_wrapper}>
          <span>
            <p className={styles.input_heading}>Country:</p>
            <input
              className={styles.input}
              placeholder="Country:"
              value={country}
              type="text"
              onChange={(e) =>
                modalDispatch({
                  type: "COUNTRY",
                  payload: e.target.value,
                })
              }
            />
          </span>
          <span>
            <p className={styles.input_heading}>Pincode:</p>
            <input
              className={styles.input}
              placeholder="Pincode"
              value={pin}
              type="number"
              onChange={(e) =>
                modalDispatch({ type: "PIN", payload: e.target.value })
              }
            />
          </span>
        </div>
        <button
          className={`${styles.save_btn} btn prim-btn`}
          onClick={addDummyAddressHandler}
        >
          Add Dummy Address
        </button>
        <button
          className={`${styles.save_btn} btn prim-btn`}
          onClick={addAddressHandler}
        >
          Save
        </button>
        <GrClose
          onClick={() => setShowAddressModal(false)}
          className={styles.close_icon}
        />
      </div>
    </div>,
    document.getElementById("root")
  );
}
export default AddressModal;
