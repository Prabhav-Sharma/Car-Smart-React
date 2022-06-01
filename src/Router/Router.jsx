import React from "react";
import { Route, Routes } from "react-router-dom";
import MockAPI from "../mockman";
import Home from "../pages/Home/Home";
import Compare from "../pages/Compare/Compare";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";
import Bookmark from "../pages/Bookmark/Bookmark";
import Cart from "../pages/Cart/Cart";
import Order from "../pages/Order/Order";
import { ProtectedRoutes } from "./ProtectedRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mockman" element={<MockAPI />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:categoryName" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/:orderId" element={<Order />} />
      </Route>
    </Routes>
  );
};

export default Router;
