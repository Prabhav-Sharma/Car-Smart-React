import reactDom from "react-dom";
import { useReducer, useState } from "react";
import { GrClose } from "react-icons/gr";
import FormTextInput from "../FormInputText/FormInputText";
import styles from "./AddressModal.module.css";
import { addAddressHandler } from "../../backend/controllers/AddressController";
import { useUserData } from "../../contexts/Providers/UserDataProvider/UserDataProvider";
import { addAddress } from "../../contexts/Providers/UserDataProvider/helpers";
import { useAuth } from "../../contexts/Providers/AuthProvider/AuthProvider";

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
  });

  const { userDataDispatch } = useUserData();
  const {
    authState: { token },
  } = useAuth();

  if (!showAddressModal) return null;

  const { name, location, phone, pin } = modalState;

  const addAddressHandler = async () => {
    const status = await addAddress({ ...modalState }, token, userDataDispatch);
    status === "SUCCESS" && setShowAddressModal(false);
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
          type="tel"
          onChange={(e) =>
            modalDispatch({ type: "PHONE", payload: e.target.value })
          }
        />
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
