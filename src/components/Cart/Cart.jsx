import React, { useContext } from "react";
import { ShopContext } from "../../context/cart/ShopContext";
import useIncreaseQuantity from "../../hooks/useIncreaseQuantity";
import useDecreaseQuantity from "../../hooks/useDecreaseQuantity";
import useRemoveItem from "../../hooks/useRemoveItem";
import useClearCart from "../../hooks/useClearCart";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import navigationHandler from "../../hooks/navigationHandler";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";

const Cart = () => {
  const { state, totalPrice } = useContext(ShopContext);
  const increaseQuantityHandler = useIncreaseQuantity();
  const decreaseQuantityHandler = useDecreaseQuantity();
  const removeItemHandler = useRemoveItem();
  const clearCartHandler = useClearCart();
  const navigate = useNavigate();
  const navHandler = navigationHandler();

  const backToPageHandler = () => {
    navigate(-1);
  };

  return (
    <div className="cart">
      {state.cart.length === 0 ? (
        <div className="cart-empty">
          <p>The cart is empty...</p>
          <button
            onClick={() => navHandler("all")}
            className="shop"
            id="shop-now"
          >
            Shop Now! <HiOutlineArrowUturnLeft />
          </button>
        </div>
      ) : (
        <ul className="ul-cart">
          <div className="checkout">
            <p className="total">Total: ${totalPrice}</p>
            <button>Proceed to checkout</button>
          </div>
          {state.cart.map((product, index) => (
            <li key={index} className="cart-lists">
              <div className="cart-img-desc">
                <img
                  src={product.image}
                  alt="product-image"
                  className="img-product"
                />
                <div>
                  <h6>{product.brand}</h6>
                  <p className="cart-desc">
                    <i>{product.description}</i>
                  </p>
                  <p>
                    <b>Price: </b> ${product.price}
                  </p>
                  <p className="sub-total">
                    Subtotal: ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="quantity">
                <div className="btn-quantity">
                  <button onClick={() => decreaseQuantityHandler(index)}>
                    -
                  </button>
                  <strong> {product.quantity}</strong>

                  <button onClick={() => increaseQuantityHandler(index)}>
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => removeItemHandler(index)}
                    className="delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
          <div className="clear-cart">
            <button onClick={clearCartHandler}>Clear Cart</button>
            <button onClick={backToPageHandler}>Back</button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Cart;
