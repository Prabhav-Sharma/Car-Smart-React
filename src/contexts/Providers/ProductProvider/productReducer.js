import { productInitialiser } from "./ProductProvider";

const productsReducer = (state, action) => {
    switch (action.type) {
      case "FETCH":
        const products = action.payload;
        return { ...state, products: products};
  
      case "CATEGORY":
        const newCategory = state.category.includes(action.category)
          ? state.category.filter((cat) => cat !== action.category)
          : [...state.category, action.category];
        return { ...state, category: newCategory };
  
      case "SORT":
        return { ...state, sortBy: action.sort };
  
      case "RATING":
        return { ...state, rating: action.rating };
  
      case "PRICE_FILTER":
        return { ...state, filterPrice: action.filterPrice };
    
  
      case "EMI":
        return { ...state, EMI: action.EMI };
  
      case "CLEAR":
     return {...productInitialiser, products:state.products }

       default:
           return state;
    }
  };

  export {productsReducer};