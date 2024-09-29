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
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
      }}
    >
      <HiArrowUp size={50} />
    </div>
  );
};

export default ButtonUp;
