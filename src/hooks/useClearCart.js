import React, { useContext } from "react";
import { ShopContext } from "../context/cart/ShopContext";

const useClearCart = () => {
  const { dispatch } = useContext(ShopContext);
  return () => {
    dispatch({ type: "CLEAR_CART" });
  };
};

export default useClearCart;
