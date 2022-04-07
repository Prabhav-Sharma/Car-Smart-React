import axios from "axios";
import { toast } from "react-toastify";

const addToBookmarks = async (product, token, toggler, dispatcher) => {
  toggler(true);
  try {
    const response = await axios({
      method: "post",
      url: "/api/user/wishlist",
      headers: { authorization: token },
      data: { product: product },
    });
    toggler(false);
    dispatcher({
      type: "UPDATE_BOOKMARKS",
      payload: { bookmarks: response.data.wishlist },
    });
    toast.success(`${product.title} added to bookmarks`);
  } catch (e) {
    toast.error("Oh no, something broke down!");
    console.log(e);
    toggler(false);
  }
};

const removeFromBookmarks = async (id, token, toggler, dispatcher) => {
  toggler(true);
  try {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/wishlist/${id}`,
      headers: { authorization: token },
    });
    toggler(false);
    dispatcher({
      type: "UPDATE_BOOKMARKS",
      payload: { bookmarks: response.data.wishlist },
    });
    toast.success(`Item removed from bookmarks`);
  } catch (e) {
    console.log(e);
    toggler(false);
  }
};

const fetchBookmarks = async (token, dispatcher) => {
  try {
    const response = await axios({
      method: "get",
      url: "/api/user/wishlist",
      headers: { authorization: token },
    });
    dispatcher({
      type: "UPDATE_BOOKMARKS",
      payload: { bookmarks: response.data.wishlist },
    });
  } catch (e) {
    toast.error("Uh oh, something broke down");
    console.log(e);
  }
};

const fetchCart = async (token, dispatcher) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/api/user/cart",
      headers: { authorization: token },
    });
    dispatcher({ type: "UPDATE_CART", payload: { cart: response.data.cart } });
  } catch (e) {
    toast.error("Uh oh, something broke down");
    console.log(e);
  }
};

const addToCart = async (token, product, toggler, dispatcher) => {
  toggler(true);
  try {
    const response = await axios({
      method: "POST",
      url: "/api/user/cart",
      headers: { authorization: token },
      data: { product: product },
    });
    toggler(false);
    dispatcher({ type: "UPDATE_CART", payload: { cart: response.data.cart } });
    toast.success(`${product.title} added to cart!`);
  } catch (e) {
    console.log(e);
    toast.error("Uh oh, couldn't add to cart");
    toggler(false);
  }
};

const deleteFromCart = async (token, id, dispatcher, toggler = () => {}) => {
  toggler(true);
  try {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/cart/${id}`,
      headers: { authorization: token },
    });
    toggler(false);
    dispatcher({ type: "UPDATE_CART", payload: { cart: response.data.cart } });
    toast.success(`Maybe another car?`);
  } catch (e) {
    toggler(false);
    toast.error("The server seems to like this one a lot!");
    console.log(e);
  }
};

const changeItemQuantityInCart = async (token, id, type, dispatcher) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/user/cart/${id}`,
      headers: { authorization: token },
      data: { action: { type: type } },
    });
    dispatcher({ type: "UPDATE_CART", payload: { cart: response.data.cart } });
    toast.success("Quantity updated!", { autoClose: 1000 });
  } catch (e) {
    toast.error("Uh oh, something broke down!");
    console.log(e);
  }
};
export {
  removeFromBookmarks,
  addToBookmarks,
  fetchBookmarks,
  fetchCart,
  addToCart,
  deleteFromCart,
  changeItemQuantityInCart,
};
