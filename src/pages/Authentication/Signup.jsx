import React from 'react'
import "./auth.css";
import {Link} from "react-router-dom";
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import FormTextInput from '../../components/FormInputText/FormInputText';
import { useAuthForm } from '../../hooks/useAuthForm/useAuthForm';
import axios from 'axios';
import { useAuth } from '../../contexts/Providers/AuthProvider/AuthProvider';
import { useEffect } from 'react';

const EMAIL_REGEX=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

function Signup() {
  useDocumentTitle("Signup | CarSmart");

  const {authFormState, authFormDispatch} =useAuthForm();
  const {authDispatch} = useAuth();
  const {fullName, email, password, loading, confirmPassword,agreement} = authFormState;

  useEffect(()=>{
    return ()=>authFormDispatch({type:"LOADING_OFF"});
  },[])

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      authFormDispatch({type:"LOADING_ON"});
      if(password.length===0 || fullName.length===0){
        alert("Credentials can't be blank");
        return;
      }

      if(!EMAIL_REGEX.test(email)){
        alert("Please enter a valid email address");
        return;
      }

      if(confirmPassword!==password){
        alert("Passwords Don't Match");
        return;
      }

      if(!agreement){
        alert("You must accept the terms & conditions in order to create account");
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
      authFormDispatch({type:"LOADING_OFF"});
    }
  };
  return (
    <main className="flex-column auth-main">
        <form className="flex-column">
            <h3 className="login-title">Sign Up</h3>
            <FormTextInput legend={"Full Name"} placeholder={"John Doe"} value={fullName} onChange={(e)=> authFormDispatch({type:"FULL_NAME", payload:e.target.value.trim()})}></FormTextInput>
            <FormTextInput legend={"Email"} placeholder={"john.doe@example.com"} type={"email"} value={email} onChange={(e)=> authFormDispatch({type:"EMAIL", payload:e.target.value.trim()})}></FormTextInput>
            <FormTextInput legend={"Password"} placeholder={"************"} type={"Password"} value={password} onChange={(e)=> authFormDispatch({type:"PASSWORD", payload:e.target.value.trim()})}/>
            <FormTextInput legend={"Confirm Password"} placeholder={"Confirm Password"} type={"Password"} value={confirmPassword} onChange={(e)=> authFormDispatch({type:"CONFIRM_PASSWORD", payload:e.target.value.trim()})}/>
            <label><input type="checkbox"  value={agreement} onChange={()=>authFormDispatch({type:"AGREEMENT"}) }/>I accept all Terms & Conditions</label>
            <button className="btn prim-btn" id="signup-btn" onClick={(e)=> signupHandler(e)}>{loading?<i className="fa fa-spinner fa-spin"/>:"Sign Up"}</button>
            <Link className="new-acc-link" to="/login">Already have an Account? ❯</Link>
        </form>
    </main>
  )
}

export default Signup