export default function reducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "SET_GENDER":
      localStorage.setItem("gender", action.payload);
      return { ...state, gender: action.payload };

    case "SET_CATEGORY":
      localStorage.setItem("category", action.payload);
      return { ...state, category: action.payload };

    case "FILTER_PRODUCTS":
      const filteredProducts = action.payload.map((product) => {
        const filteredItems = product.items.filter((item) => {
          const productGender = item.gender.toLowerCase();
          const productCategory = product.category.toLowerCase();

          const genderMatch =
            (state.gender === "men" && productGender === "men") ||
            (state.gender === "women" && productGender === "women") ||
            (state.gender === "kids" &&
              (productGender === "boys" || productGender === "girls")) ||
            state.gender === "all";

          const categoryMatch =
            !state.category || productCategory === state.category.toLowerCase(); // Check if category is selected

          return genderMatch && categoryMatch; // Return true if both match
        });

        return { ...product, items: filteredItems };
      });
      return { ...state, filteredProducts };

    case "SORT_BY_PRICE":
      const allProducts = state.filteredProducts.flatMap(
        (product) => product.items
      );

      // Sort all products by price
      const sortedProducts = allProducts.sort((a, b) => {
        return action.payload === "asc" ? a.price - b.price : b.price - a.price;
      });

      return { ...state, filteredProducts: [{ items: sortedProducts }] };

    case "CLEAR_CART":
      localStorage.removeItem("cart");
      return { ...state, cart: [] };

    case "ADD_TO_CART":
      const existingProduct = state.cart.find(
        (item) => item.id === action.product.id
      );
      let updatedCart;

      if (existingProduct) {
        updatedCart = state.cart.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.product, quantity: 1 }];
      }

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
      };

    case "REMOVE_ITEM":
      const updatedCartRemove = state.cart.filter(
        (_, index) => index !== action.index
      );

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCartRemove));

      return {
        ...state,
        cart: updatedCartRemove,
      };

    case "INCREASE_QUANTITY":
      const updatedCartIncrease = state.cart.map((item, index) =>
        index === action.index ? { ...item, quantity: item.quantity + 1 } : item
      );

      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCartIncrease));

      return {
        ...state,
        cart: updatedCartIncrease,
      };

    case "DECREASE_QUANTITY":
      const updatedCartDecrease = state.cart
        .map((item, index) =>
          index === action.index
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Filter out items with quantity 0

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCartDecrease));

      return {
        ...state,
        cart: updatedCartDecrease,
      };

    default:
      return state;
  }
}
