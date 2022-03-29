export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BOOKMARKS":
      return { ...state, bookmarks: action.payload };

    case "REMOVE_FROM_BOOKMARKS":
      return { ...state, bookmarks: action.payload };

    case "FETCH_BOOKMARKS":
      return { ...state, bookmarks: action.payload };

    case "FETCH_CART":
      return { ...state, cart: action.payload };

    case "UPDATE_QUANTITY": {
      return { ...state, cart: action.payload };
    }
    case "ADD_TO_CART": {
      return { ...state, cart: action.payload };
    }
    case "DELETE_FROM_CART": {
      return { ...state, cart: action.payload };
    }
  }
};
