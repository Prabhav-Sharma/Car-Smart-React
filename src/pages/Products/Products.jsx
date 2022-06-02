import { useEffect } from "react";
import { ProductCard } from "../../components";
import { useProducts, useDocumentTitle } from "../../hooks";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./products.css";

function Products() {
  const { state, dispatch, filteredProducts } = useProducts();
  const params = useParams();
  const { categoryName } = params;

  useEffect(() => {
    if (categoryName !== undefined) {
      dispatch({ type: "CATEGORY", category: categoryName });
    }
    return () => dispatch({ type: "CLEAR" });
  }, [categoryName]);

  const { products, category, sortBy, rating, EMI, filterPrice } = state;

  useDocumentTitle("Products | CarSmart");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios("/api/products");
        dispatch({ type: "FETCH", payload: response.data.products });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const priceRangeValues = {
    min: products.reduce(
      (acc, curr) =>
        curr.price.computable < acc.computable
          ? {
              ...acc,
              computable: curr.price.computable,
              display: curr.price.display,
            }
          : acc,
      { computable: Infinity, display: "" }
    ),
    max: products.reduce(
      (acc, curr) =>
        curr.price.computable > acc.computable
          ? {
              ...acc,
              computable: curr.price.computable,
              display: curr.price.display,
            }
          : acc,
      { computable: -Infinity, display: "" }
    ),
  };

  return (
    <main className="products-main">
      <aside className="flex-column products-aside">
        <div className="filter-top flex-row">
          <h4>Filters</h4>
          <h5 className="clear-btn" onClick={() => dispatch({ type: "CLEAR" })}>
            Clear
          </h5>
        </div>
        <h4>Price</h4>
        <div className="range-values flex-row">
          <span>{priceRangeValues.min.display}</span>
          <span>{priceRangeValues.max.display}</span>
        </div>
        <input
          className="range-input"
          type="range"
          min={priceRangeValues.min.computable}
          max={priceRangeValues.max.computable}
          onChange={(e) =>
            dispatch({ type: "PRICE_FILTER", filterPrice: e.target.value })
          }
          value={filterPrice}
        />
        <h4>Category</h4>
        <label className="flex-row">
          <input
            className="checkbox-input"
            type="checkbox"
            onChange={() => dispatch({ type: "CATEGORY", category: "EV" })}
            checked={category.includes("EV")}
          />
          Electric Vehicle
        </label>

        <label className="flex-row">
          <input
            className="checkbox-input"
            type="checkbox"
            onChange={() => dispatch({ type: "CATEGORY", category: "SUV" })}
            checked={category.includes("SUV")}
          />
          SUV
        </label>

        <label className="flex-row">
          <input
            className="checkbox-input"
            type="checkbox"
            onChange={() => dispatch({ type: "CATEGORY", category: "Sedan" })}
            checked={category.includes("Sedan")}
          />
          Sedan
        </label>

        <label className="flex-row">
          <input
            className="checkbox-input"
            type="checkbox"
            onChange={() =>
              dispatch({ type: "CATEGORY", category: "Hatchback" })
            }
            checked={category.includes("Hatchback")}
          />
          Hatchback
        </label>

        <label className="flex-row">
          <input
            className="checkbox-input"
            type="checkbox"
            onChange={() => dispatch({ type: "CATEGORY", category: "Luxury" })}
            checked={category.includes("Luxury")}
          />
          Luxury
        </label>
        <h4>Rating</h4>
        <label className="flex-row rating-label">
          <input
            className="radio-input"
            name="rating"
            type="radio"
            onChange={() => dispatch({ type: "RATING", rating: 5 })}
            checked={rating === 5}
          />
          <div className={rating === 5 ? "rating filled-siblings" : "rating"}>
            <span className="rating-star">★★★★★</span>
          </div>
        </label>
        <label className="flex-row rating-label">
          <input
            className="radio-input"
            name="rating"
            type="radio"
            onChange={() => dispatch({ type: "RATING", rating: 4 })}
            checked={rating === 4}
          />
          <div className={rating === 4 ? "rating filled-siblings" : "rating"}>
            <span className="rating-star">★★★★</span>
          </div>
        </label>
        <label className="flex-row rating-label">
          <input
            className="radio-input"
            name="rating"
            type="radio"
            onChange={() => dispatch({ type: "RATING", rating: 3 })}
            checked={rating === 3}
          />
          <div className={rating === 3 ? "rating filled-siblings" : "rating"}>
            <span className="rating-star">★★★</span>
          </div>
        </label>
        <label className="flex-row rating-label">
          <input
            className="radio-input"
            name="rating"
            type="radio"
            onChange={() => dispatch({ type: "RATING", rating: 2 })}
            checked={rating === 2}
          />
          <div className={rating === 2 ? "rating filled-siblings" : "rating"}>
            <span className="rating-star">★★</span>
          </div>
        </label>
        <label className="flex-row rating-label">
          <input
            className="radio-input"
            name="rating"
            type="radio"
            onChange={() => dispatch({ type: "RATING", rating: 1 })}
            checked={rating === 1}
          />
          <div className={rating === 1 ? "rating filled-siblings" : "rating"}>
            <span className="rating-star">★</span>
          </div>
        </label>
        <h4>Sort By</h4>
        <label className="flex-row">
          <input
            className="radio-input"
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "SORT", sort: "LOW_TO_HIGH" })}
            checked={sortBy === "LOW_TO_HIGH"}
          />
          Low to High
        </label>
        <label className="flex-row">
          <input
            className="radio-input"
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "SORT", sort: "HIGH_TO_LOW" })}
            checked={sortBy === "HIGH_TO_LOW"}
          />
          High to low
        </label>
        <h4>EMI Options (in years)</h4>
        <div className="EMI-OPTIONS flex-row">
          <label className="flex-row">
            <input
              className="radio-input"
              type="radio"
              name="EMI"
              onChange={() => dispatch({ type: "EMI", EMI: 36 })}
              checked={EMI === 36}
            />
            3Y
          </label>
          <label className="flex-row">
            <input
              className="radio-input"
              type="radio"
              name="EMI"
              onChange={() => dispatch({ type: "EMI", EMI: 48 })}
              checked={EMI === 48}
            />
            4Y
          </label>
          <label className="flex-row">
            <input
              className="radio-input"
              type="radio"
              name="EMI"
              onChange={() => dispatch({ type: "EMI", EMI: 60 })}
              checked={EMI === 60}
            />
            5Y
          </label>
          <label className="flex-row">
            <input
              className="radio-input"
              type="radio"
              name="EMI"
              onChange={() => dispatch({ type: "EMI", EMI: 72 })}
              checked={EMI === 72}
            />
            6Y
          </label>
          <label className="flex-row">
            <input
              className="radio-input"
              type="radio"
              name="EMI"
              onChange={() => dispatch({ type: "EMI", EMI: 84 })}
              checked={EMI === 84}
            />
            7Y
          </label>
        </div>
      </aside>
      <section>
        <div className="section-heading flex-row">
          <h4>
            Showing{" "}
            {category.length === 0 || category.length === 5
              ? "All Categories"
              : category.reduce((acc, curr) => acc + ", " + curr)}
          </h4>
          <h5> (Showing {filteredProducts.length} products)</h5>
        </div>
        <div className="product-grid grid auto-grid">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod._id} info={{ prod }} EMI={EMI} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <h3 className="no-products-msg">No products matchting filters :/</h3>
        )}
      </section>
    </main>
  );
}

export default Products;
