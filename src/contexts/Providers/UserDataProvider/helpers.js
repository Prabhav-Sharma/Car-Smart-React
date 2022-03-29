import axios from "axios";

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
    dispatcher({ type: "ADD_TO_BOOKMARKS", payload: response.data.wishlist });
  } catch (e) {
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
      type: "REMOVE_FROM_BOOKMARKS",
      payload: response.data.wishlist,
    });
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
    dispatcher({ type: "FETCH_BOOKMARKS", payload: response.data.wishlist });
  } catch (e) {
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

    dispatcher({ type: "FETCH_CART", payload: response.data.cart });
  } catch (e) {
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
    dispatcher({ type: "ADD_TO_CART", payload: response.data.cart });
  } catch (e) {
    console.log(e);
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
    dispatcher({ type: "DELETE_FROM_CART", payload: response.data.cart });
  } catch (e) {
    toggler(false);
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

    dispatcher({ type: "UPDATE_QUANTITY", payload: response.data.cart });
  } catch (e) {
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
