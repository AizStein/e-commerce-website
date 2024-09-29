import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import Home from "./views/Home";
import Women from "./views/Women";
import Men from "./views/Men";
import Header from "./components/Header/Header";
import Kids from "./views/Kids";
import Footer from "./components/Footer/Footer";
import ShopProvider from "./context/cart/ShopContext";
import ProductList from "./components/Products/ProductsList";
import Cart from "./components/Cart/Cart";
import MenProducts from "./components/Products/MenProducts";
import WomenProducts from "./components/Products/WomenProducts";
import KidsProducts from "./components/Products/KidsProducts";

function App() {
  return (
    <>
      <ShopProvider>
        <div className="warp-con">
          <Header />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="women" element={<Women />} />
              <Route path="women-products" element={<WomenProducts />} />
              <Route path="men" element={<Men />} />
              <Route path="men-products" element={<MenProducts />} />
              <Route path="kids" element={<Kids />} />
              <Route path="kids-products" element={<KidsProducts />} />
              <Route path="all" element={<ProductList />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </ShopProvider>
    </>
  );
}

export default App;
