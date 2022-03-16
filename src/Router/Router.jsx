import React from 'react'
import { Route, Routes } from "react-router-dom";
import MockAPI from "../mockman";
import Home from "../pages/Home/Home";
import Booking from "../pages/Booking/Booking";
import Compare from "../pages/Compare/Compare";
import Products from "../pages/Products/Products";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";

const Router=()=> {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mockman" element={<MockAPI/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/compare" element={<Compare/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
  )
}

export default Router;