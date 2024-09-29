import React, { useContext } from "react";
import ShopProvider, { ShopContext } from "../context/cart/ShopContext";

const useRemoveItem = () => {
  const { dispatch } = useContext(ShopContext);

  return (index) => {
    dispatch({ type: "REMOVE_ITEM", index });
  };
};

export default useRemoveItem;
