import React from "react";
import "./style.css";
const BackToTop = () => {
  const BackToTopHandler = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="btt-icon" onClick={BackToTopHandler}>
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
};

export default BackToTop;
