import React, { useEffect, useState } from "react";

const useIsIntersectingAnimation = ({
  mainRef,
  allRefs = [],
  classToAdd = "",
  options = {},
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entires) => {
        const curr = entires[0];
        setIsIntersecting(curr.isIntersecting);
      },
      { ...options }
    );
    observer.observe(mainRef.current);
    return () => observer.disconnect();
  }, [mainRef, options]);
  useEffect(() => {
    // if (!styleSectionRef.current) return;
    // console.log({ ref: styleSectionRef.current });
    if (isIntersecting) {
      allRefs.forEach((eachRef) => {
        if (!eachRef) return;
        if (!eachRef.current) return;
        eachRef.current.classList.add(classToAdd);
        // aboutSectionRef.current.classList.add("fade-in-about");
      });
    }
  }, [allRefs, classToAdd, isIntersecting]);
  return <div>IsIntersecting</div>;
};

export default useIsIntersectingAnimation;
