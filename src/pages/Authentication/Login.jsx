import React from 'react'
import "./auth.css";
import {Link} from "react-router-dom";
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import FormTextInput from '../../components/FormInputText/FormInputText';
import axios from 'axios';
import { useAuthForm } from '../../hooks/useAuthForm/useAuthForm';
import { useAuth } from '../../contexts/Providers/AuthProvider/AuthProvider';
const EMAIL_REGEX=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

function Login() {
  const {authState, authDispatch} = useAuth();
  const {authFormState, authFormDispatch} =useAuthForm();
  const {email, password} = authFormState;
  const {loading} = authState;

  
  const loginHandler = async (e) => {
    e.preventDefault();
    authDispatch({type:"LOADING_ON"});
    try {
      if(!EMAIL_REGEX.test(email)){
        alert("Please Enter a Valid Email Address");
        return;
      }
      if(password.length===0){
       alert("Password can't be blank");
       return;
      }
      const response = await axios.post(`/api/auth/login`, {
        email:email,
        password:password,
      });
      if(response.status ===200){
        localStorage.setItem("token", response.data.encodedToken);
        authDispatch({type:"LOGIN", user:response.data.foundUser});
        return;
      }
      alert("Wrong Credentials");
    } catch (error) {
      console.log(error);
    }finally{
      authDispatch({type:"LOADING_OFF"});
    }
  };
  
  useDocumentTitle("Login | CarSmart");
  return (
    <main className="flex-column auth-main">
    <form className="flex-column">
        <h3 className="login-title">Login</h3>
        <FormTextInput legend={"Email"} placeholder={"john.doe@example.com"} value={email} type={"email"} onChange={(e)=> authFormDispatch({type:"EMAIL", payload:e.target.value.trim()})} />
        <FormTextInput legend={"Password"} placeholder={"************"} type={"Password"} value={password} onChange={(e)=> authFormDispatch({type:"PASSWORD", payload:e.target.value.trim()})}/>
        <div className="flex-row form-wrapper">
            <label><input type="checkbox"/>Remember me</label>
            <a>Forgot Password?</a>
        </div>
        <button className="btn prim-btn" id="login-btn" onClick={(e)=> loginHandler(e)}>{loading?<i className="fa fa-spinner fa-spin"/>:"Login"}</button>
        <Link className="new-acc-link" to="/signup">Create New Account ❯</Link>
    </form>
</main>
  )
}

export default Login;