import { createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

export const ShopContext = createContext();

export default function ShopProvider({ children }) {
  const initialState = {
    products: [],
    filteredProducts: [],
    gender: "all",
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    category: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const totalQuantity = state.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = state.cart
    .reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0)
    .toFixed(2);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      dispatch({ type: "SET_PRODUCTS", payload: parsedProducts });
      dispatch({ type: "FILTER_PRODUCTS", payload: parsedProducts });
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{ state, dispatch, totalQuantity, totalPrice }}
    >
      {children}
    </ShopContext.Provider>
  );
}
