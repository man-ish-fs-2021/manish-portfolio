import React, { useState } from "react";
import WorkExperienceModal from "../WorkExperienceModal";
import "./WorkExperienceCard.css";

const WorkExperienceCard = ({
  width,
  height,
  children,
  isVertical = false,
  modalTitle,
  modalMeta,
  modalLink,
  technologies = [],
  detailItems = [],
}) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isTappedOpen, setIsTappedOpen] = useState(false);
  const [isModalHovered, setIsModalHovered] = useState(false);
  const shouldShowModal =
    (isMouseEnter || isTappedOpen || isModalHovered) && detailItems.length > 0;

  const closeModal = (event) => {
    event?.stopPropagation();
    setIsTappedOpen(false);
    setIsMouseEnter(false);
    setIsModalHovered(false);
  };

  return (
    <>
      <div
        style={{ width, height }}
        className={
          "work-experience-card-main-outer" +
          ` ${isVertical ? "isVertical" : "isHorizontal"}`
        }
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => {
          if (!isTappedOpen) {
            setIsMouseEnter(false);
          }
        }}
        onFocus={() => setIsMouseEnter(true)}
        onBlur={() => {
          if (!isTappedOpen) {
            setIsMouseEnter(false);
          }
        }}
        onClick={() => setIsTappedOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeModal(event);
          }
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsTappedOpen(true);
          }
        }}
        role="button"
        aria-haspopup="dialog"
        aria-expanded={shouldShowModal}
        tabIndex={0}
      >
        <div className="work-experience-card-main">
          <>{children}</>
        </div>
        <div
          className={
            "work-experience-card-main-hovered" +
            (isMouseEnter ? " hover" : "")
          }
        ></div>
      </div>
      <WorkExperienceModal
        isOpen={shouldShowModal}
        title={modalTitle}
        meta={modalMeta}
        link={modalLink}
        technologies={technologies}
        detailItems={detailItems}
        isPinnedOpen={isTappedOpen}
        onClose={closeModal}
        onHoverChange={setIsModalHovered}
      />
    </>
  );
};

export default WorkExperienceCard;
