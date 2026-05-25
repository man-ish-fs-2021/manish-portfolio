import React from "react";
import "./ProjectPresenter.css";
// import { projectsMap } from "../../constants";
import { ProjectCardDetailed, WorkExperienceCard } from "..";
const ProjectPresenter = ({ projectsMap }) => {
  return (
    <div className="project-section-outer">
      {Object.keys(projectsMap).map((eachKey) => {
        return (
          <div className="project-container-each">
            <h1>{eachKey}</h1>
            <div className="project-container-collection">
              {projectsMap[eachKey].map(({ name, link, skills, brief, id }) => (
                <WorkExperienceCard isVertical>
                  <ProjectCardDetailed
                    category={eachKey}
                    id={id}
                    key={name}
                    name={name}
                    brief={brief}
                    skills={skills}
                    source={link}
                  />
                </WorkExperienceCard>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectPresenter;
