import {createContext, useContext, useReducer} from "react";
import {authReducer} from "./authReducer"

const AuthContext =  createContext({});

const initialAuthState = {
    isAuthenticated:localStorage.getItem("token") ?true:false,
    user:{},
    loading:false
}

const AuthProvider=({children})=>{
 const [authState, authDispatch]= useReducer(authReducer, initialAuthState);

    return <AuthContext.Provider value={{authState, authDispatch}}>{children}</AuthContext.Provider>
}

const useAuth=()=> useContext(AuthContext);

export {AuthProvider, useAuth};
