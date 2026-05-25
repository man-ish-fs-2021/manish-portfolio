import React from "react";
import { skills } from "../../constants";
import { ProjectPill } from "../../components";
import "./SkillPresenter.css";

const SkillPill = ({ name, Icon }) => {
  return (
    <div className="skill-pill-container">
      {" "}
      <div>{<Icon />}</div> <div>{name}</div>{" "}
    </div>
  );
};

const SkillsPresenter = () => {
  return (
    <div className="skill-presenter-container">
      {skills.map(({ Icon, name }) => {
        return (
          <ProjectPill key={name} size="sm">
            <SkillPill Icon={Icon} name={name} />
          </ProjectPill>
        );
      })}
    </div>
  );
};

export default SkillsPresenter;
