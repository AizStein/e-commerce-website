import React, { useContext } from "react";
import Product from "./Product";
import cart from "../../assets/online.jpg";
import ButtonsCategoryMen from "../Category/ButtonsCategoryMen";
import ButtonUp from "../button-links/ButtonUp";

const MenProducts = () => {
  return (
    <>
      <img className="cart-img" src={cart} alt="cart" />
      <div className="button-category">
        <ButtonsCategoryMen />
      </div>
      <Product />
      <ButtonUp />
    </>
  );
};

export default MenProducts;
