import { Route, Routes } from "react-router-dom";
import {
  Login,
  Signup,
  Bookmark,
  Cart,
  Compare,
  Home,
  Order,
  Product,
  Products,
  MockAPI,
} from "../pages";
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
