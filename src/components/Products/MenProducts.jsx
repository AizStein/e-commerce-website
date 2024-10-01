import React from "react";
import Product from "./Product";
import Button from "../button-links/Button";
import cart from "../../assets/online.jpg";
import ButtonsCategoryMen from "../Category/ButtonsCategoryMen";

const MenProducts = () => {
  return (
    <>
      <img className="cart-img" src={cart} alt="cart" />
      <Button />
      <div className="button-category">
        <ButtonsCategoryMen />
      </div>
      <Product />
    </>
  );
};

export default MenProducts;
