import React from "react";
import "./compare.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import CategoryDisplay from "../../components/CategoryDisplay/CategoryDisplay";
import {
  MANUFACTURE_IMG,
  TYPE_IMG,
  MILEAGE_IMG,
  ENGINE_IMG,
  BHP_IMG,
  RATING_IMG,
  SEAT_IMG,
  TRANSMISSION_IMG,
  SERVICECOST_IMG,
  PRICE_IMG,
} from "../Product/CATEGORY_IMAGES";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { compareReducer, initialState } from "./helpers";
import { ProductSearch } from "../../components/ProductSearch/ProductSearch";

function Compare() {
  const [state, dispatch] = useReducer(compareReducer, initialState);
  const { product1, product2 } = state;

  useDocumentTitle("Compare | CarSmart");

  const product1SearchHandler = (e) => {
    dispatch({
      type: "ADD_PRODUCT_1",
      prod: JSON.parse(e.target.getAttribute("product")),
    });
  };

  const product2SearchHandler = (e) => {
    dispatch({
      type: "ADD_PRODUCT_2",
      prod: JSON.parse(e.target.getAttribute("product")),
    });
  };

  return (
    <main className="compare-main flex-column">
      <h2 className="compare-heading">Compare</h2>
      <table className="compare-table">
        <tbody>
          <tr>
            <td></td>
            <td>
              <ProductSearch prodFunc={product1SearchHandler} />
            </td>
            <td>
              <ProductSearch prodFunc={product2SearchHandler} />
            </td>
          </tr>
          <tr>
            <th>
              <h3>Category</h3>
            </th>
            <th>
              <h3>{product1.title}</h3>
            </th>
            <th>
              <h3>{product2.title}</h3>
            </th>
          </tr>
          <tr>
            <td>
              <h4>Model</h4>
            </td>
            <td className="prod-row">
              <Link to={`/product/${product1._id}`}>
                {" "}
                <img className="table-img" src={product1.src} />
              </Link>
            </td>
            <td className="prod-row">
              <Link to={`/product/${product2._id}`}>
                {" "}
                <img className="table-img" src={product2.src} />
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <CategoryDisplay src={PRICE_IMG} title={"Price"} />
            </td>
            <td>
              <h4>{product1.price.display}</h4>
            </td>
            <td>
              <h4>{product2.price.display}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <CategoryDisplay src={MANUFACTURE_IMG} title={"Manufacturer"} />
            </td>
            <td>
              <h4>{product1.brand}</h4>
            </td>
            <td>
              <h4>{product2.brand}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <CategoryDisplay src={TYPE_IMG} title={"Type"} />
            </td>
            <td>
              <h4>{product1.categoryName}</h4>
            </td>
            <td>
              <h4>{product2.categoryName}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <CategoryDisplay src={MILEAGE_IMG} title={"Mileage"} />
            </td>
            <td>
              <h4>{product1.specs.mileage}</h4>
            </td>
            <td>
              <h4>{product2.specs.mileage}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <CategoryDisplay src={ENGINE_IMG} title={"Engine"} />
            </td>
            <td>
              <h4>{product1.specs.engine}</h4>
            </td>
            <td>
              <h4>{product2.specs.engine}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <CategoryDisplay src={BHP_IMG} title={"BHP"} />
            </td>
            <td>
              <h4>{product1.specs.BHP}</h4>
            </td>
            <td>
              <h4>{product2.specs.BHP}</h4>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <CategoryDisplay src={RATING_IMG} title={"Rating"} />
            </td>
            <td>
              <h4>{product1.rating}</h4>
            </td>
            <td>
              <h4>{product2.rating}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <CategoryDisplay src={SEAT_IMG} title={"Seats"} />
            </td>
            <td>
              <h4>{product1.specs.seats}</h4>
            </td>
            <td>
              <h4>{product2.specs.seats}</h4>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <CategoryDisplay src={TRANSMISSION_IMG} title={"Transmission"} />
            </td>
            <td>
              <h4>{product1.specs.transmission}</h4>
            </td>
            <td>
              <h4>{product2.specs.transmission}</h4>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <CategoryDisplay src={SERVICECOST_IMG} title={"Service Cost"} />
            </td>
            <td>
              <h4>{product1.specs.serviceCost}</h4>
            </td>
            <td>
              <h4>{product2.specs.serviceCost}</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Compare;
