import React from "react";
import "./css/men.css";
import ButtonsCategoryMen from "../components/Category/ButtonsCategoryMen";
import img1 from "../assets/men1.avif";
import img3 from "../assets/men3.webp";
import img4 from "../assets/men4.jpeg";
import ButtonUp from "../components/button-links/ButtonUp";

const Men = () => {
  return (
    <>
      <section className="men-page">
        <div className="slogan">
          <h2>Discover Fashion That Celebrates You! </h2>
        </div>
      </section>
      <div className="button-category">
        <h3>Top Categories</h3>
        <ButtonsCategoryMen />
      </div>
      <h4 className="slogan">Redefine Classic, Embrace Modern.</h4>
      <div className="carousel">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade custom-carousel"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
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
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <ButtonUp />
    </>
  );
};

export default Men;
