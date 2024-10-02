import React, { useContext, useEffect, useState } from "react";
import "./button.css";
import useSortProducts from "../../hooks/useSortProducts";
import { ShopContext } from "../../context/cart/ShopContext";

const Sort = () => {
  const sort = useSortProducts();
  const [selectedValue, setSelectedValue] = useState("");
  const { state } = useContext(ShopContext);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    sort(value);
  };

  useEffect(() => {
    setSelectedValue("");
  }, [state.category]);

  return (
    <div className="sort">
      <select id="sort" value={selectedValue} onChange={handleSortChange}>
        <option disabled value="">
          Sort by Price
        </option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
