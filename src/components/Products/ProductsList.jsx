import React from "react";
import Product from "./Product";
import hilfiger from "../../assets/tommy.jpg";
import mode from "../../assets/h.jpg";
import fashion from "../../assets/fashion.avif";
import Button from "../button-links/Button";
import ButtonUp from "../button-links/ButtonUp";
import AllCategory from "../Category/AllCategory";

const ProductList = () => {
  return (
    <div>
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={mode} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={fashion} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={hilfiger} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="all-cat-btn">
        <AllCategory />
      </div>
      <Product />
      <ButtonUp />
    </div>
  );
};

export default ProductList;
