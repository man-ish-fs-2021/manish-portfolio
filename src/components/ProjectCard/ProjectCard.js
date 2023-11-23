import React from "react";

import "./ProjectCard.css";

const ProjectCard = ({ name, link }) => {
  return (
    <div
      onClick={() => {
        if (!link) return;
        const win = window.open(link, "_blank");
        win.focus();
      }}
      className="project-pill"
    >
      {name}
    </div>
  );
};

export default ProjectCard;
