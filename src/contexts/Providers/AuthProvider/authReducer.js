const authReducer=(state, action)=>{
    switch (action.type){
        case "SIGNUP":
        case "LOGIN":
            return {...state, isAuthenticated: true, user:action.user};
        case "LOGOUT":
            localStorage.removeItem("token");
            return {...state, isAuthenticated:false, user:{}}
        default:
            return state;
    }

}

export {authReducer}