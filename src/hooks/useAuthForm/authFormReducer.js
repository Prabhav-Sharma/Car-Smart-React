const authFormReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_ON": {
      return {
        ...state,
        loading: true
      }
    }
    case "LOADING_OFF": {
      return {
        ...state,
        loading: false
      }
    }
    case "FULL_NAME":
      return {
        ...state, fullName: action.payload
      };
    case "EMAIL":
      return {
        ...state, email: action.payload
      };
    case "PASSWORD":
      return {
        ...state, password: action.payload
      };

    case "CONFIRM_PASSWORD":
      return {
        ...state, confirmPassword: action.payload
      };

      case "AGREEMENT":
        return {
          ...state, agreement: !state.agreement
        }
  }


}

export {
  authFormReducer
};