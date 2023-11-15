import React, { useState } from "react";
import "./TextShiftOnHover.css";
// how it's done
// the content is set on after,
// on hover, we can show a different cotent.
// the margin left transition can be added

// how to do it
// on hover show another content.
// useEffect for the event listener.

const TextShiftOnHover = ({
  main,
  after,
  color = "white",
  fontSize = "4rem",
}) => {
  //   const h1Ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="on-hover-text"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        fontSize,
      }}
    >
      <h1 style={{ color }}>{isHovered ? after : main}</h1>
    </div>
  );
};

export default TextShiftOnHover;
