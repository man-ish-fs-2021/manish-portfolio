import React from "react";
import "./CarouselInfiniteLoop.css";
import { OuterLinkCard, WorkExperienceCard } from "../";

const CarouselInfinfiteLoop = ({
  renderList = [],
  height = 200,
  width = 200,
}) => {
  return (
    <div className="infinite-loop-carousel-outer">
      <div
        style={{ width: `calc(${width} * ${renderList.length})` }}
        className="infinite-loop-carousel"
      >
        {renderList.map(({ name, link }) => {
          return (
            <WorkExperienceCard height={height} width={width}>
              <OuterLinkCard name={name} link={link} />
            </WorkExperienceCard>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselInfinfiteLoop;
