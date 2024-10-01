import React from "react";
import "./button.css";
import useSortProducts from "../../hooks/useSortProducts";

const Sort = () => {
  const sort = useSortProducts();

  const handleSortChange = (e) => {
    sort(e.target.value);
  };

  return (
    <div className="sort">
      <select id="sort" onChange={handleSortChange}>
        <option disabled selected hidden>
          Sort by Price
        </option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
