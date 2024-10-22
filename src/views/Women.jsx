import "./css/women.css";
import ButtonCategoryWomen from "../components/Category/ButtonCategoryWomen";
import img1 from "../assets/women1.jpg";
import img2 from "../assets/woman2.avif";
import img3 from "../assets/women3.jpg";
import ButtonUp from "../components/button-links/ButtonUp";

const Women = () => {
  return (
    <>
      <section className="women-page">
        <div className="slogan">
          <h2>Empower Your Style: Chic, Confident, You</h2>
        </div>
      </section>
      <div className="button-category">
        <h3>Top Categories</h3>
        <ButtonCategoryWomen />
      </div>
      <h4 className="slogan">Uncomplicate Your Wardrobe, Amplify Your Look.</h4>
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

export default Women;
