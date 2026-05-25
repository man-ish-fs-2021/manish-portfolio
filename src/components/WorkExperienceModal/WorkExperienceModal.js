import React from "react";
import { createPortal } from "react-dom";
import "./WorkExperienceModal.css";

const WorkExperienceModal = ({
  isOpen,
  title,
  meta,
  link,
  technologies = [],
  detailItems = [],
  isPinnedOpen = false,
  onClose,
  onHoverChange,
}) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <>
      <div className="work-experience-card-modal-backdrop" onClick={onClose} />
      <div
        className="work-experience-card-modal-shell"
        onClick={(event) => event.stopPropagation()}
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={() => {
          if (!isPinnedOpen) {
            onHoverChange(false);
          }
        }}
      >
        <div className="work-experience-card-modal">
          <div className="work-experience-card-modal-header">
            <div>
              <h2>{title}</h2>
              <p>{meta}</p>
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="work-experience-card-modal-link"
              >
                Visit
              </a>
            )}
          </div>
          {technologies.length > 0 && (
            <div className="work-experience-card-tech-list">
              {technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          )}
          <ul>
            {detailItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>,
    document.body
  );
};

export default WorkExperienceModal;
