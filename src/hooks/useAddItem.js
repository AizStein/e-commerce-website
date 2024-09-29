import React, { useContext } from "react";
import { ShopContext } from "../context/cart/ShopContext";

const useAddItem = () => {
  const { dispatch } = useContext(ShopContext);
  return (product) => {
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  };
};

export default useAddItem;
