import React, { useContext } from "react";
import { ShopContext } from "../context/cart/ShopContext";

const useDecreaseQuantity = () => {
  const { dispatch } = useContext(ShopContext);
  return (index) => {
    dispatch({ type: "DECREASE_QUANTITY", index });
  };
};

export default useDecreaseQuantity;
