import React from "react";
import Product from "./Product";
import Button from "../button-links/Button";
import cart from "../../assets/online.jpg";
import ButtonsCategoryMen from "../Category/ButtonsCategoryMen";

const MenProducts = () => {
  return (
    <>
      <img className="cart-img" src={cart} alt="cart" />
      <div className="button-category">
        <ButtonsCategoryMen />
      </div>
      <Button />
      <Product />;
    </>
  );
};

export default MenProducts;
