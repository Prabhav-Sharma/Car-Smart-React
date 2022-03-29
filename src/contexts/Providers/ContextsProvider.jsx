import React from "react";
import { AuthProvider } from "../Providers/AuthProvider/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "../Providers/ProductProvider/ProductProvider";
import { UserDataProvider } from "../Providers/UserDataProvider/UserDataProvider";

function Contexts({ children }) {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ProductsProvider>
          <UserDataProvider>{children}</UserDataProvider>
        </ProductsProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Contexts;
