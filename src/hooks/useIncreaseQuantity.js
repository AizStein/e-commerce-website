import React, { useContext } from "react";
import { ShopContext } from "../context/cart/ShopContext";

const useIncreaseQuantity = () => {
  const { dispatch } = useContext(ShopContext);

  return (index) => {
    dispatch({ type: "INCREASE_QUANTITY", index });
  };
};

export default useIncreaseQuantity;
