import React from "react";
import { HiArrowUp } from "react-icons/hi";

const ButtonUp = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="arrow-up"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        padding: "5px",
        right: "30px",
        cursor: "pointer",
        background: "grey",
        borderRadius: "50%",
        zIndex: "999",
      }}
    >
      <HiArrowUp size={40} />
    </div>
  );
};

export default ButtonUp;
