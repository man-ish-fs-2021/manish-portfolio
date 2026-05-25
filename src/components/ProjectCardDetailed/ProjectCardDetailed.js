import React, { useRef } from "react";
import { useIsHovered } from "../../hooks";
import { ExternalArrow } from "../../components";
import "./ProjectCardDetailed.css";
// import { useHistory } from "react-router-dom";

const ProjectCardDetailed = ({ name, skills, brief, source, category, id }) => {
  const innerCardRef = useRef(null);
  const cardRef = useRef(null);
  const { isHovered, setIsHovered } = useIsHovered();
  // const history = useHistory();
  // const [mouse] = useState();
  // const mouse = useMemo(() => new Mouse(), []);
  // console.log("from mouse", { mouse });
  // const updateTransformStyle = function (x, y) {
  //   var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  //   innerCardRef.current.style.transform = style;
  //   innerCardRef.current.style.webkitTransform = style;
  //   innerCardRef.current.style.mozTransform = style;
  //   innerCardRef.current.style.msTransform = style;
  //   innerCardRef.current.style.oTransform = style;
  // };
  // const update = function (e) {
  //   mouse.updatePosition(e);
  //   updateTransformStyle(
  //     (mouse.y / innerCardRef.current.offsetHeight / 2).toFixed(2),
  //     (mouse.x / innerCardRef.current.offsetWidth / 2).toFixed(2)
  //   );
  // };

  // const handleMouseOver = (e) => {
  //   update(e);

  //   console.log("show", mouse.show(e));
  // };
  // const handleMouseEnter = (e) => {
  //   update(e);
  // };
  // const handleMouseLeave = (e) => {
  //   innerCardRef.current.style = "";
  // };
  // useEffect(() => {
  //   if (!innerCardRef.current || !cardRef.current) return;
  //   console.log("innercard ref", innerCardRef.current, innerCardRef);
  //   console.log("card ref", cardRef.current, cardRef);
  //   mouse.setOrigin(cardRef.current);
  // }, [mouse]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        e.preventDefault();
        // history.push(`/work/${id}-${category}`);
      }}
      // onMouseMove={handleMouseOver}
      // onMouseLeave={handleMouseLeave}
      // onMouseEnter={handleMouseEnter}
      ref={cardRef}
      className="project-details-card-container"
    >
      <div ref={innerCardRef} className="project-details-card-inner-container">
        <div className="project-details-card-name">{name}</div>
        <div className="project-details-card-skills">
          {skills.map((each) => <div>{each}</div>) || ""}
        </div>
        <div className="project-details-card-desc">{brief || ""}</div>
        {/* <div>{source || ""}</div> */}
      </div>
      <ExternalArrow
        onClick={() => window.open(source)}
        isHovered={isHovered}
      />
    </div>
  );
};

export default ProjectCardDetailed;
