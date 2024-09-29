import React, { useContext } from "react";
import NavBar from "../Navigation/NavBar";
import "./Header.css";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ShopContext } from "../../context/cart/ShopContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { totalQuantity } = useContext(ShopContext);
  const navigate = useNavigate();

  const cartHandler = () => {
    navigate("/cart");
  };

  return (
    <header>
      <div className="header-content">
        <div className="logo-con">
          <h3 className="logo">AizTrend</h3>
        </div>
        <NavBar />
        <div></div>
        <div className="icons">
          <div className="user">
            <CiUser size={30} className="user-icon" />
          </div>
          <div className="cartContainer" onClick={cartHandler}>
            <HiOutlineShoppingBag size={35}  className="icon" />
            {totalQuantity > 0 && (
              <span className="total-quantity">{totalQuantity}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
