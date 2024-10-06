import React, { useContext, useState } from "react";
import navigationHandler from "../../hooks/navigationHandler";
import { ShopContext } from "../../context/cart/ShopContext";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = navigationHandler();
  const { state, dispatch } = useContext(ShopContext);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const clickHandler = (e) => {
    const { value, name } = e.target;

    dispatch({
      type: name === "gender" ? "SET_GENDER" : "SET_CATEGORY",
      payload: value === state[name] ? "" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(state.gender, state.category);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="filter" onClick={toggleFilter}>
          <HiOutlineAdjustmentsHorizontal size={10} />
          <span className="filter-span">Filter</span>
        </div>
        <div className={`filter-lists  ${isOpen ? "open" : ""}`}>
          <div className="gender-selection">
            <button
              type="button"
              name="gender"
              value="women"
              onClick={clickHandler}
            >
              {state.gender === "women"
                ? "Women Categories x"
                : "Women Categories"}
            </button>
            <button
              type="button"
              name="gender"
              value="men"
              onClick={clickHandler}
            >
              {state.gender === "men" ? "Men Categories x" : "Men Categories"}
            </button>
            <button
              type="button"
              name="gender"
              value="kids"
              onClick={clickHandler}
            >
              {state.gender === "kids"
                ? "Kids Categories x"
                : "Kids Categories"}
            </button>
          </div>
          <h6>Categories</h6>
          <div className="category-selection">
            {/* PANTS */}
            <button
              type="button"
              name="category"
              value="pants"
              onClick={clickHandler}
            >
              {state.category === "pants" ? "Pants x" : "Pants"}
            </button>
            {/* t shirts */}
            <button
              type="button"
              name="category"
              value="t-shirts"
              onClick={clickHandler}
            >
              {state.category === "t-shirts" ? "T-Shirts x" : "T-Shirts"}
            </button>
            {/* JACKETS */}
            <button
              type="button"
              name="category"
              value="jackets"
              onClick={clickHandler}
            >
              {state.category === "jackets" ? "Jackets x" : "Jackets"}
            </button>
            {/* polo */}
            <button
              type="button"
              name="category"
              value="polo shirts"
              onClick={clickHandler}
            >
              {state.category === "polo shirts"
                ? "Polo Shirts x"
                : "Polo Shirts"}
            </button>
            {/* dresses */}
            <button
              type="button"
              name="category"
              value="dresses"
              onClick={clickHandler}
            >
              {state.category === "dresses" ? "Dresses x" : "Dresses"}
            </button>
          </div>

          <button type="submit" className="filter-submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Filter;
