import navigationHandler from "../../hooks/navigationHandler";

const ButtonCategoryWomen = () => {
  const navHandler = navigationHandler();

  return (
    <section className="categories">
      <div className="category-btn">
        <button onClick={() => navHandler("women", "dresses")}>Dresses</button>
        <button onClick={() => navHandler("women", "t-shirts")}>
          T-Shirts
        </button>
        <button onClick={() => navHandler("women", "pants")}>Pants</button>
        <button onClick={() => navHandler("women", "polo shirts")}>
          Polo Shirts
        </button>
        <button onClick={() => navHandler("women", "jackets")}>Jackets</button>
        <button onClick={() => navHandler("women")}>All Categories</button>
      </div>
    </section>
  );
};

export default ButtonCategoryWomen;
