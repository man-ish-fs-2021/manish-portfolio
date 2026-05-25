import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({
  name,
  link,
  size = "md",
  width,
  height,
  fontSize,
  padding,
  className = "",
  style = {},
  children,
}) => {
  return (
    <div
      onClick={() => {
        if (!link) return;
        const win = window.open(link, "_blank");
        win.focus();
      }}
      className={`project-pill ${size} ${className}`}
      style={{
        width,
        height,
        fontSize,
        padding,
        ...style,
      }}
    >
      {children || name}
    </div>
  );
};

export default ProjectCard;
