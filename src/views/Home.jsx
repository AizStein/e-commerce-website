import nike from "../assets/nike.avif";
import polo from "../assets/polo-ralph-lauren-kleid.jpg";
import tommy from "../assets/hilfiger.jpg";
import northface from "../assets/the-north-face.jpg";
import About from "../components/About/About";
import navigationHandler from "../hooks/navigationHandler";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import ButtonUp from "../components/button-links/ButtonUp";
import progress from "../assets/in-progress.png";
import { useEffect, useState } from "react";
import ProductsSwiper from "../components/Products/ProductsSwiper";

const Home = () => {
  const navHandler = navigationHandler();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <>
      <section className="landing-page">
        {isVisible && <img src={progress} alt="" className="in-progress" />}
        <div className="btn-wrap">
          <div className="btn">
            <h1 className="heading">Elevate Your Look Today!</h1>
            <div className="btn-content">
              <button onClick={() => navHandler("women")}>Women</button>
              <button onClick={() => navHandler("men")}>Men</button>
              <button onClick={() => navHandler("kids")}>Kids</button>
            </div>
          </div>
        </div>
      </section>

      <div className="shop">
        <button onClick={() => navHandler("all")} className="shop">
          Shop Now! <HiOutlineArrowUturnLeft />
        </button>
      </div>
      <ProductsSwiper />
      <div className="items-category"></div>
      <section className="clothing">
        <h3>Brands</h3>
        <div className="brand">
          <div className="container-brand">
            <div className="card home-card">
              <img
                src={polo}
                className="card-img-top home-brand-img"
                alt="Polo Shirt"
              />
              <div className="card-body">
                <p className="card-text">Ralph Lauren</p>
              </div>
            </div>
            <div className="card home-card">
              <img
                src={nike}
                className="card-img-top home-brand-img"
                alt="Polo Shirt"
              />
              <div className="card-body">
                <p className="card-text">Nike</p>
              </div>
            </div>
            <div className="card home-card">
              <img
                src={northface}
                className="card-img-top home-brand-img northface"
                alt="Polo Shirt"
              />
              <div className="card-body">
                <p className="card-text">The North Face</p>
              </div>
            </div>
            <div className="card home-card">
              <img
                src={tommy}
                className="card-img-top home-brand-img"
                alt="Polo Shirt"
              />
              <div className="card-body">
                <p className="card-text">Tommy Hilfiger</p>
              </div>
            </div>
          </div>
          <div className="container-brand"></div>
        </div>
      </section>
      <ButtonUp />
      <About />
    </>
  );
};

export default Home;
