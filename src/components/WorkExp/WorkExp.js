import React from "react";
import "./WorkExp.css";
const WorkExp = ({ name, from, to, role, gist }) => {
  return (
    <>
      {" "}
      <div className="work-exp-first-row row">
        <div className="work-exp-left">
          <div className="work-exp-company-name">{name}</div>
          <div className="work-exp-duration">
            {from} - {to}
          </div>
        </div>
        <div className="work-exp-right">{role}</div>
      </div>
      <div className="work-exp-gist">
        <p>About:</p>
        <p>{gist}</p>
      </div>
    </>
  );
};

export default WorkExp;
