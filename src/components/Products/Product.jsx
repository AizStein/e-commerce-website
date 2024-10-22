import { useContext, useEffect, useState } from "react";
import { useFetch } from "../../hooks/usefetch";
import { ShopContext } from "../../context/cart/ShopContext";
import useAddItem from "../../hooks/useAddItem";
import Sort from "../button-links/Sort";

const Product = () => {
  const { data } = useFetch("data.json");
  const { state, dispatch } = useContext(ShopContext);
  const addToCartHandler = useAddItem();

  useEffect(() => {
    if (data) {
      localStorage.setItem("products", JSON.stringify(data));
      dispatch({ type: "SET_PRODUCTS", payload: data });
      dispatch({ type: "FILTER_PRODUCTS", payload: data });
    }
  }, [data, dispatch]);

  return (
    <>
      <Sort />
      <div className="products">
        {state.filteredProducts.map((product) =>
          product.items.map((item) => (
            <div className="card d-flex card-box" key={item.id}>
              <img
                src={item.image}
                className="card-img-top item-image"
                alt={item.description}
              />
              <div className="card-body">
                <h6 className="card-title">{item.brand}</h6>
                <p className="card-text card-desc">{item.description}</p>
                <p className="card-text card-price">Price: ${item.price}</p>
                <button
                  className="btn-item"
                  onClick={() => addToCartHandler(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Product;
