import React from "react";
import "./OuterLinkCard.css";
import { ExternalArrow } from "..";
import { useIsHovered } from "../../hooks";
const OuterLinkCard = ({ name, link }) => {
  console.log({ link });
  const { isHovered, setIsHovered } = useIsHovered();
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        const win = window.open(link, "_blank");
        win.focus();
      }}
      className="outer-link-card-outer-container"
    >
      {/* <Link to={link} href={link} target="_blank"> */}
      <div className="outer-link-card-main-heading">{name}</div>
      <ExternalArrow isHovered={isHovered} />
      {/* </Link> */}
    </div>
  );
};

export default OuterLinkCard;
