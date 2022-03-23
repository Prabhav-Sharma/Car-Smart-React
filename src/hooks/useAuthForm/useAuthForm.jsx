import { useReducer } from "react";
import { authFormReducer } from "./authFormReducer";

const initialAuthFormState ={fullName:"", email:"", password:"", loading:false, confirmPassword:"", agreement:false};

const useAuthForm=()=>{
const [state, dispatch] = useReducer(authFormReducer, initialAuthFormState);
return { authFormState:state, authFormDispatch:dispatch}
}

export {useAuthForm};