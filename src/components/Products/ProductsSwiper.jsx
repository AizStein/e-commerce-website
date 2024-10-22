import { useContext } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { ShopContext } from "../../context/cart/ShopContext";
import "swiper/swiper-bundle.css";
import useAddItem from "../../hooks/useAddItem";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const ProductsSwiper = () => {
  const { state } = useContext(ShopContext);
  const addToCartHandler = useAddItem();

  return (
    <>
      <div className="swiper-container">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // width is >= 768px
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            // width is >= 1024px
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {state.filteredProducts.map((product) =>
            product.items.slice(0, 2).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="card-container">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.description}
                  />
                  <div className="swiper-card-body">
                    <h6 className="card-swiper-title">{item.brand}</h6>
                    <p className="card-swiper-price">Price: ${item.price}</p>
                    <button
                      className="btn-swiper"
                      onClick={() => addToCartHandler(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </>
  );
};

export default ProductsSwiper;
