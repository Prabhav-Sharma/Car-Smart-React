import React, { useState, useEffect } from "react";
import axios from "axios";
import "./product-search.css";
import { useProducts } from "../../contexts/Providers/ProductProvider/ProductProvider";
import { toast } from "react-toastify";

function ProductSearch({ prodFunc, classes }) {
  const { state: productsState, dispatch: productsDispatch } = useProducts();
  const { products } = productsState;
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios("/api/products");
        productsDispatch({ type: "FETCH", payload: response.data.products });
      } catch (e) {
        toast.error("Uh oh, something broke :/");
        console.log(e);
      }
    })();
  }, []);

  const searchProducts = (search) =>
    products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

  const dropdownList = searchProducts(search).map((product) => (
    <li
      key={product._id}
      onClick={(e) => {
        prodFunc(e);
        setSearch("");
      }}
      className="list-group-item"
      product={JSON.stringify(product)}
    >
      {product.title}
    </li>
  ));

  return (
    <div className="flex-column dropdown-wrapper">
      <input
        className={`form-input input-m input-round-border dropdown-search ${classes}`}
        type="text"
        placeholder="Search vehicle..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        className="search-dropdown"
        style={{ display: search.length !== 0 ? "block" : "none" }}
      >
        <ul className="list-group">{dropdownList}</ul>
      </div>
    </div>
  );
}

export { ProductSearch };
