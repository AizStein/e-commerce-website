import React from "react";
import Product from "./Product";
import cart from "../../assets/online.jpg";
import ButtonsCategoryKids from "../Category/ButtonsCategoryKids";
import ButtonUp from "../button-links/ButtonUp";

const KidsProducts = () => {
  return (
    <>
      <img className="cart-img" src={cart} alt="cart" />
      <div className="button-category">
        <ButtonsCategoryKids />
      </div>
      <Product />
      <ButtonUp />
    </>
  );
};

export default KidsProducts;
