import React from "react";
import "./Work.css";

import {
  WorkExperienceCard,
  WorkExp,
  CarouselInfinfiteLoop,
  ProjectPresenter,
} from "../../components";
import { projectsMap } from "../../constants";
import { certificateCarousel } from "../../constants";

const Work = () => {
  return (
    <div className="page-inner-container work-page-main-container">
      <div className="work-previous">
        <h1 className="work-heading">Previous work exp:</h1>
        <div className="hr-line-70" />
        <WorkExperienceCard>
          <WorkExp
            name="Analytic Edge"
            gist="In a little over 2 years of my experience at Analytic Edge, I have contributed across a suite of products and modules throughout the company using Typescript with React js with a graphql backend."
            from="July 2021"
            role="Front End Engineer"
            to="Aug 2023"
            key="1"
          />
        </WorkExperienceCard>
      </div>
      <div className="work-certificates looping-carousel">
        <h1 className="work-heading">Certificates:</h1>
        <div className="hr-line-70" />
        <CarouselInfinfiteLoop renderList={certificateCarousel} />
      </div>
      <div className="work-projects">
        <h1 className="work-heading">Projects:</h1>
        <div className="hr-line-70" />

        <ProjectPresenter projectsMap={projectsMap} />
      </div>
    </div>
  );
};

export default Work;
