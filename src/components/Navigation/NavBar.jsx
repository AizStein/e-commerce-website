import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX size={26} /> : <FiMenu size={28} />}
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/">Fahion</NavLink>
          </li>
          <li>
            <NavLink to="women">Women</NavLink>
          </li>
          <li>
            <NavLink to="men">Men</NavLink>
          </li>
          <li>
            <NavLink to="kids">Kids</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
