import { Server, Model, RestSerializer } from "miragejs";
import { v4 as uuid } from "uuid";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  addItemToCartHandler,
  clearCartHandler,
  getCartItemsHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
} from "./backend/controllers/CartController";
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from "./backend/controllers/CategoryController";
import {
  getAllProductsHandler,
  getProductHandler,
} from "./backend/controllers/ProductController";
import {
  addItemToWishlistHandler,
  getWishlistItemsHandler,
  removeItemFromWishlistHandler,
} from "./backend/controllers/WishlistController";

import {
  fetchOrdersHandler,
  fetchOrderByIdHandler,
  addOrderHandler,
} from "./backend/controllers/OrderController";

import {
  getAddressListHandler,
  addAddressHandler,
  removeAddressHandler,
  updateAddressHandler,
} from "./backend/controllers/AddressController";

import { categories } from "./backend/db/categories";
import { products } from "./backend/db/products";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  const razorpay = require("razorpay");
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      product: Model,
      category: Model,
      user: Model,
      cart: Model,
      wishlist: Model,
      orders: Model,
      addresses: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disablling console logs from Mirage
      server.logging = false;
      products.forEach((item) => {
        server.create("product", { ...item });
      });

      users.forEach((item) =>
        server.create("user", {
          ...item,
          cart: [],
          wishlist: [],
          orders: [],
          addressList: [
            {
              _id: uuid(),
              name: "Sherlock Holmes",
              location: "221B, Baker St, London",
              phone: "9754127859",
              pin: "NW1 6XE",
              country: "United Kingdom",
            },
          ],
        })
      );

      categories.forEach((item) => server.create("category", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // products routes (public)
      this.get("/products", getAllProductsHandler.bind(this));
      this.get("/products/:productId", getProductHandler.bind(this));

      // categories routes (public)
      this.get("/categories", getAllCategoriesHandler.bind(this));
      this.get("/categories/:categoryId", getCategoryHandler.bind(this));

      // cart routes (private)
      this.get("/user/cart", getCartItemsHandler.bind(this));
      this.post("/user/cart", addItemToCartHandler.bind(this));
      this.post("/user/cart/:productId", updateCartItemHandler.bind(this));
      this.delete(
        "/user/cart/:productId",
        removeItemFromCartHandler.bind(this)
      );
      this.delete("/user/cart", clearCartHandler.bind(this));

      // wishlist routes (private)
      this.get("/user/wishlist", getWishlistItemsHandler.bind(this));
      this.post("/user/wishlist", addItemToWishlistHandler.bind(this));
      this.delete(
        "/user/wishlist/:productId",
        removeItemFromWishlistHandler.bind(this)
      );

      // addresse routes (private)
      this.get("/user/address", getAddressListHandler.bind(this));
      this.post("/user/address", addAddressHandler.bind(this));
      this.post("/user/address/:addressId", updateAddressHandler.bind(this));
      this.delete("/user/address/:addressId", removeAddressHandler.bind(this));

      //orders
      this.get("/orders", fetchOrdersHandler.bind(this));
      this.get("/order/:orderId", fetchOrderByIdHandler.bind(this));
      this.post("/order", addOrderHandler.bind(this));

      this.post("/orders", async (req, res) => {
        try {
          const instance = new razorpay({
            key_id: process.env.REACT_APP_RAZORPAY_ID,
            key_secret: process.env.REACT_APP_RAZORPAY_SECRET,
          });
          const options = {
            amount: 100, //amount in smallest currency unit, which is paisa for INR
            currency: "INR",
          };
          const order = instance.orders.create(options);
          res.json(order);
        } catch (error) {
          console.log(error);
        }
      });
    },
  });
}
