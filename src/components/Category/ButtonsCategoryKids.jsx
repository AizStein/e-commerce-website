import React from "react";
import navigationHandler from "../../hooks/navigationHandler";

const ButtonsCategoryKids = () => {
  const navHandler = navigationHandler();
  return (
    <section className="categories">
      <div className="category-btn">
        <button onClick={() => navHandler("kids", "dresses")}>Dresses</button>
        <button onClick={() => navHandler("kids", "t-shirts")}>T-Shirts</button>
        <button onClick={() => navHandler("kids", "pants")}>Pants</button>
        <button onClick={() => navHandler("kids", "polo shirts")}>
          Polo Shirts
        </button>
        <button onClick={() => navHandler("kids", "jackets")}>Jackets</button>

        <button onClick={() => navHandler("kids")}>All Categories</button>
      </div>
    </section>
  );
};

export default ButtonsCategoryKids;
