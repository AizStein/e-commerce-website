import React from "react";
import navigationHandler from "../../hooks/navigationHandler";

const AllCategory = () => {
  const navHandler = navigationHandler();

  return (
    <>
      <div className="category-btn">
        <button onClick={() => navHandler("all", "dresses")}>Dresses</button>
        <button onClick={() => navHandler("all", "t-shirts")}>T-Shirts</button>
        <button onClick={() => navHandler("all", "pants")}>Pants</button>
        <button onClick={() => navHandler("all", "polo shirts")}>
          Polo Shirts
        </button>
        <button onClick={() => navHandler("all", "jackets")}>Jackets</button>
        <button onClick={() => navHandler("all")}>All Categories</button>
      </div>
    </>
  );
};

export default AllCategory;
