import React, { useState } from "react";
import "./OuterLinkCard.css";
import arrow from "../../assets/external-link.svg";
const OuterLinkCard = ({ name, link }) => {
  console.log({ link });
  const [isHovered, setIsHovered] = useState(false);
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
      <div
        className={
          "outer-link-card-main-arrow" + (isHovered ? " img-hover" : "")
        }
      >
        <div className="outer-link-card-main-arrow-container">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default OuterLinkCard;
