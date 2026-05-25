import React from "react";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();

  return (
    <div className="project-page page-inner-container">{id?.toString()}</div>
  );
};

export default Project;
