import React from "react";
import "./MobileChangeOnTap.css";

const MobileChangeOnTap = ({
  main,
  after,
  color = "white",
  fontSize = "4rem",
  tapped = false,
}) => {
  return (
    <div
      className="on-tap-text"
      style={{
        fontSize,
      }}
      key={`text ${tapped}`}
    >
      <h1 style={{ color }}>{tapped ? after : main}</h1>
    </div>
  );
};

export default MobileChangeOnTap;
