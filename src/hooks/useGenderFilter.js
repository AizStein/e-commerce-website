import React, { useContext } from "react";
import { ShopContext } from "../context/cart/ShopContext";

const useGenderFilter = () => {
  const { state, dispatch } = useContext(ShopContext);

  return (selectedGender) => {
    dispatch({ type: "SET_GENDER", payload: selectedGender });
    dispatch({ type: "FILTER_PRODUCTS", payload: state.products });
  };
};

export default useGenderFilter;
