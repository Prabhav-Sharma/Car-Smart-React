const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...state, isAuthenticated: false, user: {}, token: null };
    default:
      return state;
  }
};

export { authReducer };
