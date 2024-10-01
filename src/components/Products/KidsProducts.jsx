import React from "react";
import Product from "./Product";
import Button from "../button-links/Button";
import cart from "../../assets/online.jpg";
import ButtonsCategoryKids from "../Category/ButtonsCategoryKids";

const KidsProducts = () => {
  return (
    <>
      <img className="cart-img" src={cart} alt="cart" />
      <Button />
      <div className="button-category">
        <ButtonsCategoryKids />
      </div>
      <Product />
    </>
  );
};

export default KidsProducts;
