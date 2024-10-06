import Button from "../button-links/Button";
import ButtonCategoryWomen from "../Category/ButtonCategoryWomen";
import Product from "./Product";
import cart from "../../assets/online.jpg";
import ButtonUp from "../button-links/ButtonUp";

const WomenProducts = () => {
  return (
    <>
      <img className="cart-img" src={cart} alt="cart" />
      <div className="button-category">
        <ButtonCategoryWomen />
      </div>
      <Product />
      <ButtonUp />
    </>
  );
};

export default WomenProducts;
