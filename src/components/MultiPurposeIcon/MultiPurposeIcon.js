import React from "react";
import "./MultiPurposeIcon.css";

const MultiPurposeIcon = (props) => {
  // on click should be dynamic
  // for linked in icon and github icon, it should redirect to the website
  // for email icon it should copy the text to clipboard
  //   after email copied,
  const { icon, onClick } = props;
  return (
    <div onClick={onClick} role="button" className="custom-icon">
      {icon}
    </div>
  );
};

export default MultiPurposeIcon;
