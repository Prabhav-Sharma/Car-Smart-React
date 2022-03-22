const authReducer=(state, action)=>{
    switch (action.type){
        case "LOADING_ON":{
            return {...state, loading:true}
        }
        case "LOADING_OFF":{
            return {...state, loading:false}
        }
        case "LOGIN":
            return {...state, isAuthenticated: true, user:action.user};
        case "LOGOUT":
            localStorage.removeItem("token");
            return {...state, isAuthenticated:false, user:{}}
        case "SIGNUP":
            return {...state, isAuthenticated:true, user: action.user}
        default:
            return state;
    }

}

export {authReducer}