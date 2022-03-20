import { useReducer, createContext, useContext } from "react";
import { productsReducer } from "./productReducer";
import { compose, categoryFilter, priceFilter,ratingFilter,sortProducts} from "./helpers";

const ProductsContext = createContext(null);

const initialState = {
    products: [],
    filteredProducts: [],
    category: [],
    sortBy: null,
    rating: null,
    EMI: 72,
    filterPrice: 50,
  };


const ProductsProvider=({children})=>{
    const [state, dispatch] =  useReducer(productsReducer, initialState);
    const filteredProducts = compose(categoryFilter, priceFilter,ratingFilter,sortProducts)(state, state.products);

return <ProductsContext.Provider value={{state, dispatch, filteredProducts}}>{children}</ProductsContext.Provider>
}


const useProducts = ()=> useContext(ProductsContext);

export {ProductsProvider, useProducts, initialState as productInitialiser};