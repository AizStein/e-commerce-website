import Button from "../button-links/Button";
import ButtonCategoryWomen from "../Category/ButtonCategoryWomen";
import Product from "./Product";
import cart from "../../assets/online.jpg";

const WomenProducts = () => {
  return (
    <>
      <img className="cart-img" src={cart} alt="cart" />
      <Button />
      <div className="button-category">
        <ButtonCategoryWomen />
      </div>
      <Product />
    </>
  );
};

export default WomenProducts;
