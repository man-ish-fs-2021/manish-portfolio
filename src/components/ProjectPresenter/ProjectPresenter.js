import React from "react";
import "./ProjectPresenter.css";
// import { projectsMap } from "../../constants";
import { ProjectPill } from "..";
const ProjectPresenter = ({ projectsMap }) => {
  return (
    <div className="project-section-outer">
      {Object.keys(projectsMap).map((eachKey) => {
        return (
          <div className="project-container-each">
            <h1>{eachKey}</h1>
            <div className="project-container-collection">
              {projectsMap[eachKey].map(({ name, link }) => (
                <ProjectPill name={name} link={link} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectPresenter;
