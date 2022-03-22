const authFormReducer=(state, action)=>{
    switch (action.type){
      case "FULL_NAME":
        return {...state, fullName: action.payload};
      case "EMAIL":
        return {...state, email: action.payload};
      case "PASSWORD":
        return {...state, password: action.payload};
    }
  }

  export {authFormReducer};