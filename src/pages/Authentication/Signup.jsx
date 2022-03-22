import React from 'react'
import "./auth.css";
import {Link} from "react-router-dom";
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import FormTextInput from '../../components/FormInputText/FormInputText';
import { useAuthForm } from '../../hooks/useAuthForm/useAuthForm';
import axios from 'axios';
import { useAuth } from '../../contexts/Providers/AuthProvider/AuthProvider';

const EMAIL_REGEX=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

function Signup() {
  useDocumentTitle("Signup | CarSmart");

  const {authFormState, authFormDispatch} =useAuthForm();
  const {authState, authDispatch} = useAuth();

  const {fullName, email, password} = authFormState;
  const {loading} = authState;

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      authDispatch({type:"LOADING_ON"});
      if(password.length===0 || fullName.length===0){
        alert("Credentials can't be blank");
        return;
      }
      if(!EMAIL_REGEX.test(email)){
        alert("Please Enter a Valid Email Address");
        return;
      }
      const response = await axios.post(`/api/auth/signup`, {
        fullName,
        email,
        password
      });
      if(response.status ===201){
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({type:"SIGNUP", user:response.data.createdUser})
      return;
    }
    alert("Something went wrong.") 
  } catch (error) {
    console.log(error);
    alert("Something went wrong.")

    }finally{
      authDispatch({type:"LOADING_OFF"});
    }
  };
  return (
    <main className="flex-column auth-main">
        <form className="flex-column">
            <h3 className="login-title">Sign Up</h3>
            <FormTextInput legend={"Full Name"} placeholder={"John Doe"} value={fullName} onChange={(e)=> authFormDispatch({type:"FULL_NAME", payload:e.target.value.trim()})}></FormTextInput>
            <FormTextInput legend={"Email"} placeholder={"john.doe@example.com"} type={"email"} value={email} onChange={(e)=> authFormDispatch({type:"EMAIL", payload:e.target.value.trim()})}></FormTextInput>
            <FormTextInput legend={"Password"} placeholder={"************"} type={"Password"} value={password} onChange={(e)=> authFormDispatch({type:"PASSWORD", payload:e.target.value.trim()})}/>
            <label><input type="checkbox"/>I accept all Terms & Conditions</label>
            <button className="btn prim-btn" id="signup-btn" onClick={(e)=> signupHandler(e)}>{loading?<i className="fa fa-spinner fa-spin"/>:"Sign Up"}</button>
            <Link className="new-acc-link" to="/login">Already have an Account? ❯</Link>
        </form>
    </main>
  )
}

export default Signup