import React, { useContext } from "react";
import { ShopContext } from "../context/cart/ShopContext";

const useSortProducts = () => {
  const { dispatch } = useContext(ShopContext);

  return (order) => {
    dispatch({ type: "SORT_BY_PRICE", payload: order });
  };
};

export default useSortProducts;
