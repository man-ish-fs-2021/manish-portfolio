import React from "react";

import "./ProjectCard.css";

const ProjectCard = ({ name, link }) => {
  return (
    <div
      onClick={() => {
        const win = window.open(link, "_blank");
        win.focus();
      }}
      className="project-pill"
    >
      <div>{name}</div>
    </div>
  );
};

export default ProjectCard;
