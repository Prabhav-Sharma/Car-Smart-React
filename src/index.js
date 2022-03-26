import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { ProductsProvider } from "./contexts/Providers/ProductProvider/ProductProvider";
import { AuthProvider } from "./contexts/Providers/AuthProvider/AuthProvider";
import { BookmarksProvider } from "./contexts/Providers/BookmarksProvider/BookmarksProvider";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <ProductsProvider>
    <BookmarksProvider>
    <App />
    </BookmarksProvider>
    </ProductsProvider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
