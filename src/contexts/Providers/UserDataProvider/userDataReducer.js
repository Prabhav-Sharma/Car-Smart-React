export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BOOKMARKS":
      return { ...state, bookmarks: action.payload.bookmarks };

    case "UPDATE_CART":
      return { ...state, cart: action.payload.cart };

    case "UPDATE_ORDERS":
      return { ...state, orders: action.payload.orders };

    case "UPDATE_ADDRESS_LIST":
      return { ...state, addressList: action.payload.addressList };

    default:
      return state;

    // case "ADD_TO_BOOKMARKS":
    //   return { ...state, bookmarks: action.payload };

    // case "REMOVE_FROM_BOOKMARKS":
    //   return { ...state, bookmarks: action.payload };

    // case "FETCH_BOOKMARKS":
    //   return { ...state, bookmarks: action.payload };

    // case "FETCH_CART":
    //   return { ...state, cart: action.payload };

    // case "UPDATE_QUANTITY": {
    //   return { ...state, cart: action.payload };
    // }
    // case "ADD_TO_CART": {
    //   return { ...state, cart: action.payload };
    // }
    // case "DELETE_FROM_CART": {
    //   return { ...state, cart: action.payload };
    // }
  }
};
