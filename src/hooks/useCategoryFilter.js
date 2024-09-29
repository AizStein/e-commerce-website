import React, { useContext } from "react";
import { ShopContext } from "../context/cart/ShopContext";

const useCategoryFilter = () => {
  const { state, dispatch } = useContext(ShopContext);

  return (selectedCategory) => {
    dispatch({ type: "SET_CATEGORY", payload: selectedCategory });
    // This will trigger the filtering in the reducer
    dispatch({ type: "FILTER_PRODUCTS", payload: state.products });
  };
};

export default useCategoryFilter;
