export default function reducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "SET_GENDER":
      return { ...state, gender: action.payload };

    case "SET_CATEGORY": // New case for setting category
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

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "ADD_TO_CART":
      const existingProduct = state.cart.find(
        (item) => item.id === action.product.id
      );
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.product, quantity: 1 }],
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.index),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item, index) =>
          index === action.index
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map((item, index) =>
            index === action.index
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
}
