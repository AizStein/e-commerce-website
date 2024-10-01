import React from "react";
import navigationHandler from "../../hooks/navigationHandler";

const ButtonsCategoryMen = () => {
  const navHandler = navigationHandler();

  return (
    <section className="categories">
      <div className="category-btn">
        <button onClick={() => navHandler("men", "t-shirts")}>T-Shirts</button>
        <button onClick={() => navHandler("men", "pants")}>Pants</button>
        <button onClick={() => navHandler("men", "polo shirts")}>
          Polo Shirts
        </button>
        <button onClick={() => navHandler("men", "jackets")}>Jackets</button>

        <button onClick={() => navHandler("men")}>All Categories</button>
      </div>
    </section>
  );
};

export default ButtonsCategoryMen;
