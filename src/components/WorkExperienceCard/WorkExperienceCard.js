import React, { useState } from "react";
import "./WorkExperienceCard.css";

const WorkExperienceCard = ({
  width,
  height,
  children,
  isVertical = false,
}) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <div
      style={{ width, height }}
      className={
        "work-experience-card-main-outer" +
        ` ${isVertical ? "isVertical" : "isHorizontal"}`
      }
    >
      <div
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
        className="work-experience-card-main"
      >
        <>{children}</>
      </div>
      <div
        className={
          "work-experience-card-main-hovered" + (isMouseEnter ? " hover" : "")
        }
      ></div>
    </div>
  );
};

export default WorkExperienceCard;
