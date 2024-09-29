import React from "react";
import Button from "../components/button-links/Button";
import ButtonsCategoryKids from "../components/Category/ButtonsCategoryKids";
import "./css/kids.css";
import img1 from "../assets/kid1.avif";
import img2 from "../assets/kid2.jpeg";
import img3 from "../assets/kid3.webp";
import ButtonUp from "../components/button-links/ButtonUp";

const Kids = () => {
  return (
    <>
      <section className="kids-page">
        <div className="slogan">
          <h2>Playful Styles for Little Smiles!</h2>
        </div>
      </section>
      <div className="navigation-button">
        <Button />
      </div>
      <div className="button-category">
        <ButtonsCategoryKids />
      </div>
      <h4 className="slogan">Dress Up for Every Childhood Adventure!</h4>
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
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
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

export default Kids;
