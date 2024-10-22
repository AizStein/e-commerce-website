import "./button.css";
import navigationHandler from "../../hooks/navigationHandler";

const Button = () => {
  const navHandler = navigationHandler();

  return (
    <>
      <div className="nav-btn">
        <button onClick={() => navHandler("men")}>Men</button>
        <button onClick={() => navHandler("women")}>Women</button>
        <button onClick={() => navHandler("kids")}>Kids</button>
      </div>
    </>
  );
};

export default Button;
