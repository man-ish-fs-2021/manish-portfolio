import React from "react";
import arrow from "../../assets/external-link.svg";
import "./ExternalArrow.css";

const ExternalArrow = ({ isHovered, onClick }) => {
  return (
    <div
      className={"outer-link-card-main-arrow" + (isHovered ? " img-hover" : "")}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClick) {
          onClick();
        }
      }}
    >
      <div className="outer-link-card-main-arrow-container">
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default ExternalArrow;
